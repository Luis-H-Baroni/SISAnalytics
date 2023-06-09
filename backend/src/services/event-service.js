const { eventRepository } = require('../repositories')
const { eventAdapter, incidentAdapter } = require('../utils/adapters')
const { identifierGenerator } = require('../utils/helpers/')
const incidentEvents = require('../main/incident-events')

exports.incidentHandler = async (payload) => {
  const data = JSON.parse(payload)

  const incidentKey = incidentAdapter.incidentKey(data)
  console.log('Incident Key', incidentKey)
  console.log('Incident Events', incidentEvents)
  if (incidentEvents.has(incidentKey)) return

  const event = await eventRepository.getEventByEventAlias({
    eventAlias: incidentKey,
  })
  console.log(event)

  incidentEvents.set(incidentKey, { ...event, log: data })

  //todo: incidentService.createIncident(data)
  console.log('Incident detected', incidentEvents)
}

exports.getEvents = async (payload) => {
  const result = eventRepository.getEvents(payload)
  return result
}

exports.createEvent = async (payload) => {
  const eventAlias = eventAdapter.eventAlias(payload)
  const data = {
    eventId: payload.eventId ?? identifierGenerator.uuid(),
    eventAlias,
    ...payload,
  }
  const result = eventRepository.createEvent(data)
  return result
}

exports.deleteEvent = async (payload) => {
  const result = eventRepository.deleteEvent(payload)
  return result
}

exports.updateEvent = async (payload) => {
  console.log(payload)
  const result = eventRepository.updateEvent(payload)
  return result
}
