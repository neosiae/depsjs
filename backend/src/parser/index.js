function getDependencies (manifest) {
  const { dependencies, peerDependencies, devDependencies } = manifest

  let deps = {}

  if (dependencies) deps.dependencies = dependencies
  if (peerDependencies) deps.peerDependencies = peerDependencies
  if (devDependencies) deps.devDependencies = devDependencies

  return deps
}

function getLatestManifest (data) {
  const version = data['dist-tags'].latest
  return data.versions[version]
}

function getPackages (deps) {
  const { dependencies, peerDependencies, devDependencies } = deps

  let packages = {}

  if (dependencies) packages = { ...packages, ...dependencies }
  if (peerDependencies) packages = { ...packages, ...peerDependencies }
  if (devDependencies) packages = { ...packages, ...devDependencies }

  return packages
}

function getDependenciesAndPackages (data, scope) {
  let dependencies

  if (scope) {
    dependencies = getDependencies(getLatestManifest(data))
  } else {
    dependencies = getDependencies(data)
  }

  const packages = getPackages(dependencies)
  return { dependencies, packages }
}

module.exports = {
  getDependencies,
  getLatestManifest,
  getPackages,
  getDependenciesAndPackages
}
