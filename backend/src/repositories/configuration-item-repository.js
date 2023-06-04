const { ConfigurationItemModel } = require('../main/databases/schemas')

exports.registerConfigurationItem = async (payload) => {
  const result = ConfigurationItemModel.create(payload)

  return result
}

exports.getConfigurationItem = async (payload) => {
  console.log(payload)
  const result = await ConfigurationItemModel.find(payload)
  return result
}

exports.getConfigurationItemById = async (payload) => {
  const query = ConfigurationItemModel.find(payload)

  const result = await query.lean().exec()
  return result[0]
}
