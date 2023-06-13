const { incidentService, configurationItemService } = require('../services')

exports.getIncidents = async (req, res) => {
  try {
    console.log(req.query)
    const result = await incidentService.getIncidents(req.query)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.createIncident = async (req, res) => {
  try {
    const existingItem = await configurationItemService.configurationItemGetId(
      req.body.configurationItemId
    )
    if (!existingItem)
      return res.status(400).json({ message: 'Item not found' })

    const result = await incidentService.createIncident({
      configurationItemAlias: existingItem.configurationItemAlias,
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.deleteIncident = async (req, res) => {
  try {
    const result = await incidentService.deleteIncident(req.body)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.updateIncident = async (req, res) => {
  try {
    const result = await incidentService.updateIncident({
      ...req.query,
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
