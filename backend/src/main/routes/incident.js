const { incidentController } = require('../../controllers')
const { incidentSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.incident = (router) => {
  router
    .route('/incident')
    .get(
      requestValidator.validate(incidentSchema.getIncidentSchema),
      incidentController.getIncidents
    )
  router
    .route('/incident')
    .post(
      requestValidator.validate(incidentSchema.createIncidentSchema),
      incidentController.createIncident
    )
  router.route('/incident').delete(
    //requestValidator.validate(incidentSchema.deleteIncidentSchema),
    incidentController.deleteIncident
  )
  router
    .route('/incident')
    .put(
      requestValidator.validate(incidentSchema.updateIncidentSchema),
      incidentController.updateIncident
    )
}
