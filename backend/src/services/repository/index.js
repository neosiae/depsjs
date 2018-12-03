const routes = require('./routes')

async function repository (fastify, options) {
  fastify.register(routes)
}

module.exports = repository
