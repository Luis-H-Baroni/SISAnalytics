const { randomUUID } = require('crypto')

exports.uuid = () => {
  return randomUUID()
}
