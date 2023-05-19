const { logController } = require('../../controllers')
const { exampleSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.log = (router) => {
  router.route('/logs').get(logController.getLogs)
}
