const { EventModel } = require('../main/databases/schemas')

exports.createEvent = async (payload) => {
  const result = await EventModel.create(payload)
  return result
}

exports.getEvents = async (payload) => {
  console.log(payload)
  const result = await EventModel.find(payload)
  return result
}

exports.getEventByEventAlias = async (payload) => {
  const query = EventModel.find(payload)

  const result = await query.lean().exec()
  return result[0]
}

exports.getEventById = async (id) => {
  const query = EventModel.find({ eventId: id })

  const result = await query.lean().exec()
  console.log(result)
  return result[0]
}

exports.deleteEvent = async (payload) => {
  const result = await EventModel.deleteOne(payload)
  return result
}

exports.updateEvent = async (payload) => {
  const result = await EventModel.updateOne(
    { eventId: payload.eventId },
    payload
  )
  return result
}

exports.createWorkaround = async (payload) => {
  const result = await EventModel.updateOne(
    { eventId: payload.eventId },
    { $push: { workarounds: payload.workaround } }
  )
  return result
}
