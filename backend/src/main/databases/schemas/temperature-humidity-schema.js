const db = require('../mongodb')

const temperatureHumiditySchema = new db.Schema({
  itemAlias: String,
  espId: String,
  configurationItemId: String,
  data: {
    celsius: String,
    fareinheit: String,
    umidity: String,
  },
})


const TemperatureHumidityModel = db.model('TemperatureHumiditySchema', temperatureHumiditySchema)

module.exports = TemperatureHumidityModel
