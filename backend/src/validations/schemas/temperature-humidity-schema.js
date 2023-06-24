const Joi = require('joi')

const temperatureHumiditySchema = Joi.object({
  itemAlias: Joi.string().required(),
  configurationItemId: Joi.string().required(),
  data: Joi.object({
    celsius: Joi.string().required(),
    fareinheit: Joi.string().required(),
    umidity: Joi.string().required(),
  }).required(),
})

module.exports = temperatureHumiditySchema
