const Joi = require('joi')

const getEventSchema = Joi.object({
  eventId: Joi.string(),
  eventAlias: Joi.string(),
  itemId: Joi.string(),
  itemAlias: Joi.string(),
})

const createEventSchema = Joi.object({
  eventId: Joi.string(),
  incidentAlias: Joi.string().required(),
  itemId: Joi.string().required(),
})

const deleteEventSchema = Joi.object({
  eventId: Joi.string().required(),
})

const updateEventSchema = Joi.object({
  eventId: Joi.string().required(),
  eventAlias: Joi.string(),
  itemId: Joi.string(),
  itemAlias: Joi.string(),
})

module.exports = {
  getEventSchema,
  createEventSchema,
  deleteEventSchema,
  updateEventSchema,
}
