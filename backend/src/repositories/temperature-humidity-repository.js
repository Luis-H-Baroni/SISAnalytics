const { TemperatureHumidityModel } = require('../main/databases/schemas')

exports.getTemperatureHumidity = async (payload) => {
  const result = await TemperatureHumidityModel.find(payload)
  return result
}

exports.createTemperatureHumidity = async (payload) => {
  const result = await TemperatureHumidityModel.create(payload)
  return result
}

exports.deleteTemperatureHumidity = async () => {
  return await TemperatureHumidityModel.deleteMany({})
}