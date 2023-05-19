const { logRepository } = require('../repositories')

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
