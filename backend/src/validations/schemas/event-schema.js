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
  impact: Joi.number().required().min(1).max(5),
  urgency: Joi.number().required().min(1).max(5),
})

const deleteEventSchema = Joi.object({
  eventId: Joi.string().required(),
})

const updateEventSchema = Joi.object({
  eventId: Joi.string().required(),
  eventAlias: Joi.string(),
  configurationItemId: Joi.string(),
  configurationItemAlias: Joi.string(),
  impact: Joi.number().min(1).max(5),
  urgency: Joi.number().min(1).max(5),
})

const createWorkaroundSchema = Joi.object({
  eventId: Joi.string().required(),
  workaround: Joi.string().required(),
})

module.exports = {
  getEventSchema,
  createEventSchema,
  deleteEventSchema,
  updateEventSchema,
  createWorkaroundSchema,
}
