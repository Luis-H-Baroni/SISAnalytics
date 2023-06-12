const db = require('../mongodb')

const incidentSchema = new db.Schema({
  incidentId: String,
  incidentAlias: String,
  configurationItemId: String,
  configurationItemAlias: String,
  workaround: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})

const IncidentModel = db.model('IncidentSchema', incidentSchema)

module.exports = IncidentModel
