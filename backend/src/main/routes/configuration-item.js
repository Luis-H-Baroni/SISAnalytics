const { requestValidator } = require('../../utils/middlewares')
const { configurationItemController } = require('../../controllers')
const { configurationItemSchema } = require('../../validations/schemas')

exports.configurationItem = (router) => {
  router.route('/configuration-item').get(configurationItemController.configurationItemController)
  router.route('/configuration-item/:id').get(configurationItemController.configurationItemGetId)
  router.route('/configuration-item').post(
    requestValidator.validate(configurationItemSchema),
    configurationItemController.configurationItemCreate
  )
  router.route('/configuration-item/:id').put(configurationItemController.configurationItemUpdateId)
  router.route('/configuration-item').delete(configurationItemController.configurationItemDeleteAll)
  router.route('/configuration-item/:id').delete(configurationItemController.configurationItemDeleteId)
}
