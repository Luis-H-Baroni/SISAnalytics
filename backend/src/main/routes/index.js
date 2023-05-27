const { Router } = require('express')
const { example } = require('./example')
const { log } = require('./log')
const router = Router()

const routes = { example, log }

for (const route in routes) {
  routes[route](router)
}

module.exports = { router }
