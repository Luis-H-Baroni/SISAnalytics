const { eventController } = require('../../controllers')
const { eventSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.event = (router) => {
  router
    .route('/events')
    .get(
      requestValidator.validate(eventSchema.getEventSchema),
      eventController.getEvents
    )
  router
    .route('/events')
    .post(
      requestValidator.validate(eventSchema.createEventSchema),
      eventController.createEvent
    )
  router
    .route('/events')
    .delete(
      requestValidator.validate(eventSchema.deleteEventSchema),
      eventController.deleteEvent
    )
  router
    .route('/events')
    .put(
      requestValidator.validate(eventSchema.updateEventSchema),
      eventController.updateEvent
    )
}
