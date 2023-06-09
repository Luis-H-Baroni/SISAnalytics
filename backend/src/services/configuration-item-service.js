const { configurationItemRepository } = require('../repositories')
const { ConfigurationItemModel  } = require('../main/databases/schemas/')

const configurationItemGetAll = async (payload) => {
  const data = await configurationItemRepository.getConfigurationItem(payload)

  return data
}

const configurationItemCreate = async (payload) => {
  const data = await configurationItemRepository.createConfigurationItem(payload)
  
  return data
}

const configurationItemDeleteId = async (id) => {
  const data = await configurationItemRepository.deleteConfigurationItemId(id)
  
  return data
}

const configurationItemDeleteAll = async () => {
  return ConfigurationItemModel.deleteMany({})
}

const configurationItemGetId = async (id) => {
  const data = await configurationItemRepository.getConfigurationItemById(id)
  return data
}



module.exports = {
  configurationItemGetAll,
  configurationItemCreate,
  configurationItemDeleteId,
  configurationItemDeleteAll,
  configurationItemGetId
}