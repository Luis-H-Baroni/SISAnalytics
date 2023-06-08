const {
  test,
  registerLog,
  emitEvent,
} = require('../../controllers/socket-controller')

module.exports = (io) => {
  io.on('connection', (socket) => {
    test(socket)
    registerLog(socket)
    emitEvent(socket)
  })
}
