const { solutionService, configurationItemService } = require('../services')

exports.getSolutions = async (req, res) => {
  try {
    const result = await solutionService.getSolutions(req.query)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.createSolution = async (req, res) => {
  try {
    let existConfigururationItem
    if(req.body.configurationItemId){
      existConfigururationItem = await configurationItemService.configurationItemGetId(
        req.body.configurationItemId 
      )
      if(!existConfigururationItem){
        return res.status(404).json({message: 'Configuration Item not found'})
      }
    }
    
    const result = await solutionService.createSolution({
      configurationItemAlias: existConfigururationItem?.configurationItemAlias !== undefined ? existConfigururationItem.configurationItemAlias : '',
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.updateSolution = async (req, res) => {
  try {
    const result = await solutionService.updateSolution({
      ...req.query,
      ...req.body,
    })
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.deleteSolution = async (req, res) => {
  try {
    const result = await solutionService.deleteSolution(req.params.id)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}

exports.getSolutionId = async (req, res) => {
  try {
    const result = await solutionService.getSolutionId(req.params.id)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}