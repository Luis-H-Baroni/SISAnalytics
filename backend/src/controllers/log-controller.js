const { logService } = require('../services')

exports.getLogs = async (req, res) => {
  try {
    const result = await logService.getLogs(req.query)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}
