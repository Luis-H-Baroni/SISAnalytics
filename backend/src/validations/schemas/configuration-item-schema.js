const Joi = require('joi')

const configurationItemSchema = Joi.object({
  configurationItemAlias: Joi.string().required(),
  serial: Joi.string().required(),
  category: Joi.string().required(),
  type: Joi.string().required(),
  model: Joi.string().required(),
  local: Joi.string().required(),
  licenseOfUse: Joi.string(),
  purchase: Joi.date().required(),
  responsible: Joi.string().required(),
  supplier: Joi.string().required(),
  quantityOfProblems: Joi.number().required(),
  quantityOfIncidents: Joi.number().required(),
  status: Joi.boolean().required(),
  comments: Joi.string(),
})

module.exports = configurationItemSchema
