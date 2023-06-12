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
  const query = ConfigurationItemModel.find({ configurationItemId: id })

  const result = await query.lean().exec()
  return result[0]
}

exports.deleteConfigurationItemId = async (id) => {
  const result = await ConfigurationItemModel.deleteOne({
    configurationItemId: id,
  })

  return result
}
