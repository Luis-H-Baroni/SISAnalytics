const { LogModel } = require('../main/databases/schemas')

exports.registerLog = (payload) => {
  LogModel.create(payload)
}

exports.getLogs = async (payload) => {
  const result = await LogModel.find(payload)
  return result
}
