const schemas = require('./schemas')

async function routes (fastify, options) {
  const { analyser } = fastify

  fastify.get(
    '/:service/:owner/:name',
    { schemas },
    async (request, reply) => {
      const { service, owner, name } = request.params
      const analysed = await analyser({ service, owner, name })

      if (analysed.ok === false) {
        reply
          .code(analysed.status)
          .send(analysed.statusText)
      } else {
        reply.send(analysed)
      }
    })
}

module.exports = routes
