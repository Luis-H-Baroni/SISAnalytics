const db = require('../mongodb')
const { identifierGenerator } = require('../../../utils/helpers')

const temperatureHumiditySchema = new db.Schema({
  logId: { type: String, default: identifierGenerator.uuid() },
  configurationItemAlias: String,
  data: {
    celsius: String,
    fareinheit: String,
    umidity: String,
  },
})

const TemperatureHumidityModel = db.model(
  'TemperatureHumiditySchema',
  temperatureHumiditySchema
)

module.exports = TemperatureHumidityModel
