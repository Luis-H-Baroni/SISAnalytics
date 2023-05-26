const { logRepository, eventRepository } = require('../repositories')
const incidentEvents = require('../main/incident-events')
const { incidentAdapter } = require('../utils/adapters')

exports.registerWorkstationLog = (payload) => {
  const data = JSON.parse(payload)
  const { ram, rom, cpuTemp, hostname, createdAt } = data

  const logRegister = {
    itemAlias: hostname,
    itemId: 'item-123',
    data: {
      ram,
      rom,
      cpuTemp,
    },
    createdAt,
  }

  logRepository.registerLog(logRegister)
}

exports.getLogs = async (payload) => {
  const result = await logRepository.getLogs(payload)
  return result
}

exports.incidentHandler = async (payload) => {
  const data = JSON.parse(payload)

  const incidentKey = incidentAdapter.incidentKey(data)

  console.log('Incident Events', incidentEvents)
  if (incidentEvents.has(incidentKey)) return

  const event = await eventRepository.getEventById({
    eventId: incidentKey,
  })

  incidentEvents.set(incidentKey, { ...event, log: data })
  console.log('Incident detected', incidentEvents)
}
