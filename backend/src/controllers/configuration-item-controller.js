const { configurationItemService } = require('../services')

exports.configurationItemController = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.params)
    
    const string = await configurationItemService.configurationItemGetAll(req.body)

    const result = string + ' controller'
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemCreate = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemCreate(req.body)
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}