const { exampleService } = require('../services')

exports.example = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.params)
    const string = await exampleService.example(req.body.teste)

    const result = string + ' controller'
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
