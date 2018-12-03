const schemas = require('./schemas')

async function routes (fastify, options) {
  const { analyser } = fastify

  fastify.get('/package/:name', { schemas }, async (request, reply) => {
    const { name } = request.params
    const analysed = await analyser({
      service: 'npm',
      name,
      scope: false
    })

    if (analysed.ok === false) {
      reply
        .code(analysed.status)
        .send(analysed.statusText)
    } else {
      reply.send(analysed)
    }
  })

  fastify.get('/package/:scope/:name', { schemas }, async (request, reply) => {
    const { scope, name } = request.params
    const analysed = await analyser({
      service: 'npm',
      name: `${scope}/${name}`,
      scope: true
    })

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
