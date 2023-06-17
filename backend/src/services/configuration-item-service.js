const { configurationItemRepository } = require('../repositories')
const { ConfigurationItemModel } = require('../main/databases/schemas/')

const configurationItemGetAll = async (payload) => {
  const data = await configurationItemRepository.getConfigurationItem(payload)

  return data
}

const configurationItemCreate = async (payload) => {
  const data = await configurationItemRepository.createConfigurationItem(
    payload
  )

  return data
}

const configurationItemUpdateId = async (id, payload) => {
  const data = await configurationItemRepository.updateConfigurationItemId(
    id,
    payload
  )

  if (!data) return null
  return data
}


const configurationItemDeleteId = async (id) => {
  const data = await configurationItemRepository.deleteConfigurationItemId(id)

  if (data.deletedCount === 0) return null
  return data
}

const configurationItemDeleteAll = async () => {
  return ConfigurationItemModel.deleteMany({})
}

const configurationItemGetId = async (id) => {
  const data = await configurationItemRepository.getConfigurationItemById(id)
  console.log(data)
  if (!data) return null
  return data
}

module.exports = {
  configurationItemGetAll,
  configurationItemCreate,
  configurationItemUpdateId,
  configurationItemDeleteId,
  configurationItemDeleteAll,
  configurationItemGetId,
}
