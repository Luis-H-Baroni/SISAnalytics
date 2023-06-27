const { temperatureHumidityRepository } = require('../repositories')
const { identifierGenerator } = require('../utils/helpers/')
const socket = require('../main/index')

exports.getTemperatureHumidity = async (payload) => {
  const result = await temperatureHumidityRepository.getTemperatureHumidity(
    payload
  )

  if (result.length === 0) return []
  return result
}

exports.createTemperatureHumidity = async (payload) => {
  const data = payload //JSON.parse(payload)
  const { celsius, fareinheit, umidity } = payload.data

  const logRegister = {
    configurationItemAlias: 'ESP32',
    data: {
      celsius,
      fareinheit,
      umidity,
    },
  }

  temperatureHumidityRepository.createTemperatureHumidity(logRegister)
  //console.log(logRegister)
  socket.socketObject.sockets.emit('system_info_dashboard', logRegister)
}

exports.deleteTemperatureHumidity = async () => {
  const result = await temperatureHumidityRepository.deleteTemperatureHumidity()
  return result
}
