const exampleController = require('./example-controller')
const socketController = require('./socket-controller')
const logController = require('./log-controller')
const configurationItemController = require('./configuration-item-controller')
const eventController = require('./event-controller')
const incidentController = require('./incident-controller')
const solutionController = require('./solution-controller')
const temperatureHumidityController = require('./temperature-humidity-controller')

module.exports = {
  exampleController,
  socketController,
  logController,
  configurationItemController,
  eventController,
  incidentController,
  solutionController,
  temperatureHumidityController
}
