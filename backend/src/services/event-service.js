const { eventRepository, incidentRepository } = require('../repositories')
const { eventAdapter, incidentAdapter } = require('../utils/adapters')
const { identifierGenerator } = require('../utils/helpers/')
const incidentEvents = require('../main/incident-events')
const priorityMatrix = require('../main/priority-matrix')

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

  incidentRepository.createIncident({
    incidentId: identifierGenerator.uuid(),
    incidentAlias: event.eventAlias,
    configurationItemId: event.configurationItemId,
    configurationItemAlias: event.configurationItemAlias,
    workaround: event.workaround, //todo: definir escolha de workaround
  })
  console.log('Incident detected', incidentEvents)
}

exports.getEvents = async (payload) => {
  const result = await eventRepository.getEvents(payload)

  if (result.length === 0) return []
  return result
}

exports.getEventById = async (payload) => {
  const result = await eventRepository.getEventById(payload)
  console.log(result)
  if (!result) return []
  return result
}

exports.createEvent = async (payload) => {
  const eventAlias = eventAdapter.eventAlias(payload)

  const priority = priorityMatrix.getPriorityNumber(
    payload.urgency,
    payload.impact
  )

  const data = {
    eventId: payload.eventId ?? identifierGenerator.uuid(),
    eventAlias,
    priority,
    ...payload,
  }
  const result = await eventRepository.createEvent(data)
  return result
}

exports.deleteEvent = async (payload) => {
  const result = await eventRepository.deleteEvent(payload)
  return result
}

exports.updateEvent = async (payload) => {
  console.log(payload)
  const result = await eventRepository.updateEvent(payload)
  return result
}

exports.createWorkaround = async (payload) => {
  const result = await eventRepository.createWorkaround(payload)
  return result
}
