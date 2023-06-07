const { configurationItemRepository } = require('../repositories')
const { ConfigurationItemModel  } = require('../main/databases/schemas/')



const configurationItemGetAll = async (payload) => {
  const data = await configurationItemRepository.getConfigurationItem(payload)

  return data
}

const configurationItemCreate = async (payload) => {
  const data = await configurationItemRepository.registerConfigurationItem(payload)
  
  return data
}

const configurationItemDelete = async () => {
  return ConfigurationItemModel.deleteMany({})
}


module.exports = {
  configurationItemGetAll,
  configurationItemCreate,
  configurationItemDelete
}