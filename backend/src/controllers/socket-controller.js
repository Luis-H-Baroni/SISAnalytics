const { logService } = require('../services')

exports.test = (socket) => {
  socket.on('test', (data) => {
    console.log('test')
    console.log(data)
  })
}

exports.registerLog = (socket) => {
  socket.on('system_info', (payload) => {
    logService.registerWorkstationLog(payload)
  })
}

exports.incidentListener = (socket) => {
  socket.on('incident', (payload) => {
    logService.incidentHandler(payload)
  })
}
