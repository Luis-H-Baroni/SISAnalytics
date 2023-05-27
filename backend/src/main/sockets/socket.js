const {
  test,
  registerLog,
  incidentListener,
} = require('../../controllers/socket-controller')

module.exports = (io) => {
  io.on('connection', (socket) => {
    test(socket)
    registerLog(socket)
    incidentListener(socket)
  })
}
