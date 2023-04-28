const Joi = require('joi')

const exampleSchema = Joi.object({
  teste: Joi.string().required(),
})

module.exports = exampleSchema
