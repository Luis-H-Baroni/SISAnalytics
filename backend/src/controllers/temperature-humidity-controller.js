const { temperatureHumidityService, configurationItemService } = require('../services')

exports.getTemperatureHumidity = async (req, res) => {
  try {
    const result = await temperatureHumidityService.getTemperatureHumidity(req.query)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.createTemperatureHumidity = async (req, res) => {
  try {
    let existConfigururationItem
    if(req.body.configurationItemId){
      existConfigururationItem = await configurationItemService.configurationItemGetId(
        req.body.configurationItemId 
      )
      if(!existConfigururationItem){
        return res.status(404).json({message: 'Configuration Item not found'})
      }
    }
    
    const result = await temperatureHumidityService.createTemperatureHumidity({
      configurationItemAlias: existConfigururationItem?.configurationItemAlias !== undefined ? existConfigururationItem.configurationItemAlias : '',
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.deleteTemperatureHumidity = async (req, res) => {
  try {
    const result = await temperatureHumidityService.deleteTemperatureHumidity()
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}