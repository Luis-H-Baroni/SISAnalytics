const { configurationItemService } = require('../services')
const { validator } = require('./validators')

exports.configurationItemController = async (req, res) => {
  try {
    const data = await configurationItemService.configurationItemGetAll(req.body)

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemCreate = async (req, res) => {
  try {
    let data = req.body
    
    let valid = await validator(data)

    if(valid.status !== 200){
      return res.status(valid.status).json(valid.message)
    }

    data = await configurationItemService.configurationItemCreate(req.body)

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.configurationItemDeleteAll = async (req, res) => {
  try {
    await configurationItemService.configurationItemDelete()
    return res.status(200).json({status: 200, message: 'Todos os itens de configuração foram removidos.'})
  } catch(error) {
    return res.status(500).json(error)
  }
}