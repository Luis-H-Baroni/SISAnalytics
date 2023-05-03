const { exampleController } = require('../../controllers')
const { exampleSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.example = (router) => {
  router
    .route('/example')
    .post(requestValidator.validate(exampleSchema), exampleController.example)
}
