const { ConfigurationItemModel } = require('../main/databases/schemas')

exports.createConfigurationItem = async (payload) => {
  const result = ConfigurationItemModel.create(payload)

  return result
}

exports.getConfigurationItem = async (payload) => {
  console.log(payload)
  const result = await ConfigurationItemModel.find(payload)
  return result
}

exports.getConfigurationItemById = async (id) => {
  const result = ConfigurationItemModel.find({ configurationItemId: id })

  return result
}

exports.deleteConfigurationItemId = async (id) => {
  const result = await ConfigurationItemModel.deleteOne({ configurationItemId: id })

  return result
}

