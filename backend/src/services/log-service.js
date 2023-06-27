const { logRepository } = require('../repositories')

exports.registerWorkstationLog = (payload, socket) => {
  const data = JSON.parse(payload)
  const { ram, rom, cpuTemp, hostname, createdAt } = data

  const logRegister = {
    configurationItemAlias: hostname,
    configurationItemId: 'item-123',
    data: {
      ram,
      rom,
      cpuTemp,
    },
    createdAt,
  }

  logRepository.registerLog(logRegister)
  socket.broadcast.emit('system_info_dashboard', data)
}

exports.getLogs = async (payload) => {
  const result = await logRepository.getLogs(payload)

  if (result.length === 0) return null
  return result
}
