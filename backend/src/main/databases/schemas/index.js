const EventModel = require('./event-schema')
const LogModel = require('./log-schema')
const ConfigurationItemModel = require('./configuration-item-schema')
const IncidentModel = require('./incident-schema')
const SolutionModel = require('./solution-schema')
const TemperatureHumidityModel = require('./temperature-humidity-schema')

module.exports = { 
  EventModel, 
  LogModel, 
  ConfigurationItemModel, 
  IncidentModel, 
  SolutionModel,
  TemperatureHumidityModel
}
