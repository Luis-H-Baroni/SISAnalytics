const exampleService = require('./example-service')
const logService = require('./log-service')
const eventService = require('./event-service')
const configurationItemService = require('./configuration-item-service')
const incidentService = require('./incident-service')
const solutionService = require('./solution-service')
const temperatureHumidityService = require('./temperature-humidity-service')

module.exports = {
  exampleService,
  logService,
  eventService,
  configurationItemService,
  incidentService,
  solutionService,
  temperatureHumidityService
}
