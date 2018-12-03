const createSVG = require('../../svg')
const schemas = require('./schemas')

async function routes (fastify, options) {
  const { analyser } = fastify

  fastify.get(
    '/package/:name/status.svg',
    { schemas },
    async (request, reply) => {
      const { name } = request.params
      const analysed = await analyser({
        service: 'npm',
        name,
        scope: false
      })

      reply
        .code(200)
        .header('Content-Type', 'image/svg+xml, charset=utf8')
        .send(createSVG(analysed))
    }
  )

  fastify.get(
    '/package/:scope/:name/status.svg',
    { schemas },
    async (request, reply) => {
      const { scope, name } = request.params
      const analysed = await analyser({
        service: 'npm',
        name: `${scope}/${name}`,
        scope: true
      })

      reply
        .code(200)
        .header('Content-Type', 'image/svg+xml, charset=utf8')
        .send(createSVG(analysed))
    }
  )

  fastify.get(
    '/:service/:owner/:name/status.svg',
    { schemas },
    async (request, reply) => {
      const { service, owner, name } = request.params
      const analysed = await analyser({ service, owner, name })

      reply
        .code(200)
        .header('Content-Type', 'image/svg+xml, charset=utf8')
        .send(createSVG(analysed))
    }
  )
}

module.exports = routes
