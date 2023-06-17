const db = require('../mongodb')

const { v4: uuidv4 } = require('uuid')
// const { identifierGenerator } = require('../../../utils/helpers')

const configurationItemSchema = new db.Schema({
  configurationItemId: { type: String, default: uuidv4() },
  configurationItemAlias: String,
  serial: String,
  category: String,
  type: String,
  model: String,
  local: String,
  licenseOfUse: String,
  purchase: { type: Date },
  responsible: String,
  supplier: String,
  quantityOfProblems: Number,
  quantityOfIncidents: Number,
  status: Boolean,
  comments: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})

const EventModel = db.model('ConfigurationItemSchema', configurationItemSchema)

module.exports = EventModel
