const { incidentRepository } = require('../repositories')
const { identifierGenerator } = require('../utils/helpers/')

exports.getIncidents = async (payload) => {
  const result = incidentRepository.getIncidents(payload)

  if (result.length === 0) return null
  return result
}

exports.createIncident = async (payload) => {
  const data = {
    incidentId: payload.incidentId ?? identifierGenerator.uuid(),
    ...payload,
  }
  const result = incidentRepository.createIncident(data)
  return result
}

exports.deleteIncident = async (payload) => {
  const result = incidentRepository.deleteIncident(payload)
  return result
}

exports.updateIncident = async (payload) => {
  console.log(payload)
  const result = incidentRepository.updateIncident(payload)
  return result
}
