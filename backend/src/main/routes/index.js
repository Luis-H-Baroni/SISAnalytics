const { Router } = require('express')
const { example } = require('./example')
const { log } = require('./log')
const { configurationItem } = require('./configuration-item')
const { event } = require('./event')
const { incident } = require('./incident')
const { solution } = require('./solution')
const { temperatureHumidity} = require('./temperature-humidity')

const router = Router()

const routes = { example, log, event, configurationItem, incident, solution, temperatureHumidity }

for (const route in routes) {
  routes[route](router)
}

module.exports = { router }
