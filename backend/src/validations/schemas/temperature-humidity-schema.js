const Joi = require('joi')

const temperatureHumiditySchema = Joi.object({
  configurationItemAlias: Joi.string().required(),
  data: Joi.object({
    celsius: Joi.string().required(),
    fareinheit: Joi.string().required(),
    umidity: Joi.string().required(),
  }).required(),
})

module.exports = temperatureHumiditySchema
