const routes = require('./routes')

async function npm (fastify, options) {
  fastify.register(routes)
}

module.exports = npm
