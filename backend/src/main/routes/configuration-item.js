const { configurationItemController } = require('../../controllers')

exports.configurationItem = (router) => {
  router.route('/configuration-item').get(configurationItemController.configurationItemController)
  router.route('/configuration-item').post(configurationItemController.configurationItemCreate)
}
