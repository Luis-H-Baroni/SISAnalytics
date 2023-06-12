const { IncidentModel } = require('../main/databases/schemas')

exports.createIncident = (payload) => {
  const result = IncidentModel.create(payload)
  return result
}

exports.getIncidents = async (payload) => {
  console.log(payload)
  const result = await IncidentModel.find(payload)
  return result
}

exports.getIncidentByIncidentAlias = async (payload) => {
  const query = IncidentModel.find(payload)

  const result = await query.lean().exec()
  return result[0]
}

exports.deleteIncident = async (payload) => {
  const result = await IncidentModel.deleteOne(payload)
  return result
}

exports.updateIncident = async (payload) => {
  const result = await IncidentModel.updateOne(
    { incidentId: payload.incidentId },
    payload
  )
  return result
}
