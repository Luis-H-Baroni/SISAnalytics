const { configurationItemService } = require('../services')

exports.configurationItemController = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetAll(
      req.body
    )

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemGetId = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetId(
      req.params.id
    )

    if (!data) return res.status(404).json({ message: 'Item não encontrado.' })

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemCreate = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemCreate(
      req.body
    )

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemUpdateId = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetId(req.params.id)
    if (!data) return res.status(404).json({ message: 'Item não encontrado.' })
    else {
      const data = await configurationItemService.configurationItemUpdateId(
        req.params.id,
        req.body
      )
      return res.status(200).json(data)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemDeleteId = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemDeleteId(
      req.params.id
    )
    if (!data) return res.status(404).json({ message: 'Item não encontrado.' })

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.configurationItemDeleteAll = async (req, res) => {
  try {
    await configurationItemService.configurationItemDeleteAll()
    return res.status(200).json({
      message: 'Todos os itens de configuração foram removidos.',
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}
