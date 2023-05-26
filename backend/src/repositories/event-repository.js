const { EventModel } = require('../main/databases/schemas')

exports.registerEvent = (payload) => {
  EventModel.create(payload)
}

exports.getEvents = async (payload) => {
  console.log(payload)
  const result = await EventModel.find(payload)
  return result
}

exports.getEventById = async (payload) => {
  const query = EventModel.find(payload)

  const result = await query.lean().exec()
  return result[0]
}
