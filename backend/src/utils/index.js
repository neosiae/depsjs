const fetch = require('node-fetch')
const fastifyPlugin = require('fastify-plugin')

function createUrl (options) {
  const { service, owner, name, scope } = options

  const urls = {
    npm: 'https://registry.npmjs.org',
    github: 'https://raw.githubusercontent.com',
    bitbucket: 'https://bitbucket.org',
    gitlab: 'https://gitlab.com'
  }

  switch (service) {
    case 'npm':
      return `${urls.npm}/${name}/${scope ? '' : 'latest'}`
    case 'github':
      return `${urls.github}/${owner}/${name}/HEAD/package.json`
    case 'bitbucket':
      return `${urls.bitbucket}/${owner}/${name}/raw/HEAD/package.json`
    case 'gitlab':
      return `${urls.gitlab}/${owner}/${name}/raw/HEAD/package.json`
    default:
      return 'Service not found'
  }
}

function isScoped (name) {
  return name && name.startsWith('@')
}

async function fetchy (url, fastify) {
  let response
  try {
    response = await fetch(url)
  } catch (err) {
    fastify.log.error(err)
  }
  const json = await response.json()
  return json
}

async function parallelFetch (object, fastify) {
  const requests = Object.keys(object).map(key => {
    const scope = isScoped(key)
    const options = ({ service: 'npm', name: key, scope })
    const url = createUrl(options)
    return fetchy(url, fastify)
  })

  let result
  try {
    result = await Promise.all(requests)
  } catch (err) {
    fastify.log.error(err)
  }
  return result
}

async function utils (fastify, options) {
  fastify.decorate('createUrl', createUrl)
  fastify.decorate('isScoped', isScoped)
  fastify.decorate('fetch', fetchy)
  fastify.decorate('parallelFetch', parallelFetch)
}

module.exports = fastifyPlugin(utils)
