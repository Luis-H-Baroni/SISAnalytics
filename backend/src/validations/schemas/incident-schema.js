const Joi = require('joi')

const getIncidentSchema = Joi.object({
  incidentId: Joi.string(),
  incidentAlias: Joi.string(),
  configurationItemId: Joi.string(),
  configurationItemAlias: Joi.string(),
})

const createIncidentSchema = Joi.object({
  incidentId: Joi.string(),
  incidentAlias: Joi.string().required(),
  configurationItemId: Joi.string().required(),
  workaround: Joi.string().required(),
})

const deleteIncidentSchema = Joi.object({
  incidentId: Joi.string().required(),
})

const updateIncidentSchema = Joi.object({
  incidentId: Joi.string().required(),
  incidentAlias: Joi.string(),
  configurationItemId: Joi.string(),
  configurationItemAlias: Joi.string(),
  workaround: Joi.string(),
})

module.exports = {
  getIncidentSchema,
  createIncidentSchema,
  deleteIncidentSchema,
  updateIncidentSchema,
}
