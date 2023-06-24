const { requestValidator } = require('../../utils/middlewares')
const { temperatureHumidityController } = require('../../controllers')
const { temperatureHumiditySchema } = require('../../validations/schemas')

exports.temperatureHumidity = (router) => {
  router.route('/temperature-humidity').get(temperatureHumidityController.getTemperatureHumidity)
  router.route('/temperature-humidity').post(requestValidator.validate(temperatureHumiditySchema), temperatureHumidityController.createTemperatureHumidity)
  router.route('/temperature-humidity').delete(temperatureHumidityController.deleteTemperatureHumidity)
}
