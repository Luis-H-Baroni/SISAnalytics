const db = require('../mongodb')

const eventSchema = new db.Schema({
  eventId: String,
  eventAlias: String,
  itemId: String,
  itemAlias: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})

const EventModel = db.model('EventSchema', eventSchema)

module.exports = EventModel
