const { solutionRepository } = require('../repositories')
const { identifierGenerator } = require('../utils/helpers/')

exports.getSolutions = async (payload) => {
  const result = await solutionRepository.getSolutions(payload)

  if (result.length === 0) return []
  return result
}

exports.createSolution = async (payload) => {
  const data = {
    solutionId: payload.solutionId ?? identifierGenerator.uuid(),
    ...payload,
  }
  const result = await solutionRepository.createSolution(data)
  return result
}

exports.updateSolution = async (payload) => {
  console.log(payload)
  const result = await solutionRepository.updateSolution(payload)
  return result
}

exports.deleteSolution = async (payload) => {
  const result = await solutionRepository.deleteSolution(payload)
  return result
}

exports.getSolutionId = async (payload) => {
  const result = await solutionRepository.getSolutionId(payload)
  return result
}

exports.deleteAllSolution = async () => {
  const result = await solutionRepository.deleteAllSolution()
  return result
}