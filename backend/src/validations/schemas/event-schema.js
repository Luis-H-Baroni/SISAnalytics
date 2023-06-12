const Joi = require('joi')

const getEventSchema = Joi.object({
  eventId: Joi.string(),
  eventAlias: Joi.string(),
  configurationItemId: Joi.string(),
  configurationItemAlias: Joi.string(),
})

const createEventSchema = Joi.object({
  eventId: Joi.string(),
  incidentAlias: Joi.string().required(),
  configurationItemId: Joi.string().required(),
})

const deleteEventSchema = Joi.object({
  eventId: Joi.string().required(),
})

const updateEventSchema = Joi.object({
  eventId: Joi.string().required(),
  eventAlias: Joi.string(),
  configurationItemId: Joi.string(),
  configurationItemAlias: Joi.string(),
})

module.exports = {
  getEventSchema,
  createEventSchema,
  deleteEventSchema,
  updateEventSchema,
}
