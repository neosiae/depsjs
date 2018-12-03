const path = require('path')
const helmet = require('fastify-helmet')
const fastifyStatic = require('fastify-static')

module.exports = async function (fastify, options) {
  fastify.register(helmet)

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    prefix: '/dist'
  })

  fastify.get('*', async (request, reply) => {
    reply.sendFile('index.html')
  })
}
