const Joi = require('joi')

const solutionSchema = Joi.object({
  configurationItemId: Joi.string().allow(''),
  category: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  solution: Joi.string(),
})

module.exports = solutionSchema
