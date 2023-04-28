const { Router } = require('express')
const { example } = require('./example')
const router = Router()

const routes = { example }

for (const route in routes) {
  routes[route](router)
}

module.exports = { router }
