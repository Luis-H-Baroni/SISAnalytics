const { configurationItemRepository } = require('../repositories')

const configurationItemGetAll = async (payload) => {
  const string = await configurationItemRepository.getConfigurationItem(payload)

  const result = string + ' service aqui'
  return result
}

const  configurationItemCreate = async (payload) => {
  const data = await configurationItemRepository.registerConfigurationItem(payload)
  if(!data) throw new Error('Error creating configuration item')
  return data
}


module.exports = {
  configurationItemGetAll,
  configurationItemCreate
}