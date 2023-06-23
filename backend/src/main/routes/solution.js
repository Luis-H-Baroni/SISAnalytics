const { solutionController } = require('../../controllers')
const { solutionSchema } = require('../../validations/schemas')
const { requestValidator } = require('../../utils/middlewares')

exports.solution = (router) => {
  router.route('/solution').get(solutionController.getSolutions)
  router.route('/solution/:id').get(solutionController.getSolutionId)
  router.route('/solution').post(requestValidator.validate(solutionSchema), solutionController.createSolution)
  router.route('/solution/:id').put(solutionController.updateSolution)
  router.route('/solution/:id').delete(solutionController.deleteSolution)
  router.route('/solution').delete(solutionController.deleteAllSolution)
}
