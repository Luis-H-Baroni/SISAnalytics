const db = require('../mongodb')

const solutionSchema = new db.Schema({
  solutionId: String,
  configurationItemId: String,
  category: String,
  type: String,
  description: String,
  solution: String,
})

const SolutionModel = db.model('SolutionModel', solutionSchema)

module.exports = SolutionModel
