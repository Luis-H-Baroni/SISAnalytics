const { configurationItemService } = require('../services')

exports.configurationItemController = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetAll(req.body)

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemGetId = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetId(req.params.id)
    if(data.length === 0){
      return res.status(404).json({status: 404, message: 'Nenhum item de configuração foi encontrado.'})
    }
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemCreate = async (req, res) => {
  try {
    let data = req.body
    
    data = await configurationItemService.configurationItemCreate(req.body)

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemDeleteId = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemDeleteId(req.params.id)
    if(data.deletedCount === 0){
      return res.status(200).json({status: 200, message: 'Nenhum item de configuração foi removido.'})
    }
    return res.status(200).json(data)
  } catch(error) {
    return res.status(500).json(error)
  }
}

exports.configurationItemDeleteAll = async (req, res) => {
  try {
    await configurationItemService.configurationItemDeleteAll()
    return res.status(200).json({status: 200, message: 'Todos os itens de configuração foram removidos.'})
  } catch(error) {
    return res.status(500).json(error)
  }
}