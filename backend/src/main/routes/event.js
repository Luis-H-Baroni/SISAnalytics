const { eventController } = require('../../controllers')
const { eventSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.event = (router) => {
  router
    .route('/event')
    .get(
      requestValidator.validate(eventSchema.getEventSchema),
      eventController.getEvents
    )
  router
    .route('/event')
    .post(
      requestValidator.validate(eventSchema.createEventSchema),
      eventController.createEvent
    )
  router
    .route('/event')
    .delete(
      // requestValidator.validate(eventSchema.deleteEventSchema),
      eventController.deleteEvent
    )
  router
    .route('/event')
    .put(
      // requestValidator.validate(eventSchema.updateEventSchema),
      eventController.updateEvent
    )

  router
    .route('/event/workaround')
    .post(
      requestValidator.validate(eventSchema.createWorkaroundSchema),
      eventController.createWorkaround
    )
}
