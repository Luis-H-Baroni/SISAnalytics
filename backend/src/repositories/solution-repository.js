const { SolutionModel } = require('../main/databases/schemas')

exports.getSolutions = async (payload) => {
  const result = await SolutionModel.find(payload)
  return result
}

exports.createSolution = async (payload) => {
  const result = await SolutionModel.create(payload)
  return result
}

exports.getSolutionId = async (payload) => {
  const query = await SolutionModel.find({ solutionId: payload })
  return query[0]
}

exports.updateSolution = async (payload) => {
  const result = await SolutionModel.updateOne(
    { solutionId: payload.solutionId },
    payload
  )
  return result
}

exports.deleteSolution = async (payload) => {
  console.log(payload)
  const result = await SolutionModel.deleteOne(
    {solutionId: payload}
  )
  return result
}