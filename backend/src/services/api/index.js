const helmet = require('fastify-helmet')
const cors = require('fastify-cors')
const utils = require('../../utils')
const analyser = require('../../analyser')
const npm = require('../npm')
const repository = require('../repository')

module.exports = async function (fastify, options) {
  fastify.register(helmet)
  fastify.register(cors, { origin: process.env.ORIGIN })
  fastify.register(utils)
  fastify.register(analyser)
  fastify.register(npm, { prefix: '/api' })
  fastify.register(repository, { prefix: '/api' })
}
