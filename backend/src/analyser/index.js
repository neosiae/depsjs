const semver = require('semver')
const fetch = require('node-fetch')
const fastifyPlugin = require('fastify-plugin')
const { getLatestManifest, getDependenciesAndPackages } = require('../parser')

function counter (type) {
  const keys = Object.keys(type)
  const result = keys.reduce((accumulator, key) => {
    accumulator.total += 1

    if (type[key].satisfies) {
      accumulator.updated += 1
    } else {
      accumulator.outdated += 1
    }
    return accumulator
  }, {
    total: 0,
    updated: 0,
    outdated: 0
  })
  return result
}

function compare (currentVersion, latestVersion) {
  return {
    currentVersion,
    latestVersion,
    satisfies: semver.satisfies(latestVersion, currentVersion)
  }
}

function manifestify (data, isScoped, getLatestManifest) {
  const manifestified = data.map(current => {
    if (isScoped(current._id)) {
      return getLatestManifest(current)
    } else {
      return current
    }
  })
  return manifestified
}

function analyse (current, latestManifests) {
  let result = {}
  let deps = []
  let peer = []
  let dev = []

  if (current.dependencies) {
    result.dependencies = {
      meta: {},
      packages: {}
    }
    deps = Object.keys(current.dependencies)
  }

  if (current.peerDependencies) {
    result.peerDependencies = {
      meta: {},
      packages: {}
    }
    peer = Object.keys(current.peerDependencies)
  }

  if (current.devDependencies) {
    result.devDependencies = {
      meta: {},
      packages: {}
    }
    dev = Object.keys(current.devDependencies)
  }

  for (let manifest of latestManifests) {
    if (deps.includes(manifest.name)) {
      result.dependencies.packages[manifest.name] = compare(
        current.dependencies[manifest.name],
        manifest.version
      )
    }

    if (peer.includes(manifest.name)) {
      result.peerDependencies.packages[manifest.name] = compare(
        current.peerDependencies[manifest.name],
        manifest.version
      )
    }

    if (dev.includes(manifest.name)) {
      result.devDependencies.packages[manifest.name] = compare(
        current.devDependencies[manifest.name],
        manifest.version
      )
    }
  }

  if (result.dependencies) {
    result.dependencies.meta = counter(result.dependencies.packages)
  }

  if (result.peerDependencies) {
    result.peerDependencies.meta = counter(result.peerDependencies.packages)
  }

  if (result.devDependencies) {
    result.devDependencies.meta = counter(result.devDependencies.packages)
  }

  return result
}

async function fetchPackage (options, createUrl, fastify) {
  const url = createUrl(options)

  let response
  try {
    response = await fetch(url)
  } catch (err) {
    fastify.log.error(err)
  }

  if (!response.ok) {
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText
    }
  } else {
    const json = await response.json()
    return json
  }
}

async function analyser (fastify, options) {
  const { createUrl, isScoped, parallelFetch } = fastify

  fastify.decorate('analyser', async (options) => {
    const currentPackage = await fetchPackage(options, createUrl, fastify)

    if (currentPackage.ok === false) return currentPackage

    const {
      dependencies,
      packages
    } = getDependenciesAndPackages(currentPackage, options.scope)

    const latestData = await parallelFetch(packages, fastify)
    const manifests = manifestify(latestData, isScoped, getLatestManifest)
    const result = analyse(dependencies, manifests)

    return result
  })
}

module.exports = fastifyPlugin(analyser)
