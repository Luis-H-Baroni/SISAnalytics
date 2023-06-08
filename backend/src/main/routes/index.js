const { Router } = require('express')
const { example } = require('./example')
const { log } = require('./log')
const { event } = require('./event')
const router = Router()

const routes = { example, log, event }

for (const route in routes) {
  routes[route](router)
}

module.exports = { router }
