const { Router } = require('express')
const { example } = require('./example')
const { log } = require('./log')
const { configurationItem } = require('./configuration-item')
const router = Router()

const routes = { example, log, configurationItem }

for (const route in routes) {
  routes[route](router)
}

module.exports = { router }
