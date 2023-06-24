const { temperatureHumidityRepository } = require('../repositories')
const { identifierGenerator } = require('../utils/helpers/')

exports.getTemperatureHumidity = async (payload) => {
  const result = await temperatureHumidityRepository.getTemperatureHumidity(payload)

  if (result.length === 0) return []
  return result
}

exports.createTemperatureHumidity = async (payload) => {
  const data = {
    espId: payload.espId ?? identifierGenerator.uuid(),
    ...payload,
  }
  const result = await temperatureHumidityRepository.createTemperatureHumidity(data)
  return result
}

exports.deleteTemperatureHumidity= async () => {
  const result = await temperatureHumidityRepository.deleteTemperatureHumidity()
  return result
}