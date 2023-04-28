const { exampleRepository } = require('../repositories')

exports.example = async (payload) => {
  const string = await exampleRepository.example(payload)

  const result = string + ' service'
  return result
}
