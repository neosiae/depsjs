const helmet = require('fastify-helmet')
const utils = require('../../utils')
const analyser = require('../../analyser')
const routes = require('./routes')

module.exports = async function (fastify, options) {
  fastify.register(helmet)
  fastify.register(utils)
  fastify.register(analyser)
  fastify.register(routes, { prefix: '/status' })
}
