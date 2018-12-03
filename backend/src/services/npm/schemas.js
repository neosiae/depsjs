const schemas = {
  params: {
    type: 'object',
    properties: {
      scope: { type: 'string ' },
      name: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        type: 'object',
        meta: {
          type: 'object',
          total: { type: 'number' },
          updated: { type: 'number' },
          outdated: { type: 'number' }
        },
        packages: {
          type: 'object',
          dependencies: {
            type: 'object',
            patternProperties: {
              '^.*$': {
                type: 'object',
                properties: {
                  currentVersion: { type: 'string' },
                  latestVersion: { type: 'string' },
                  satisfies: { type: 'boolean' }
                }
              }
            }
          },
          peerDependencies: {
            type: 'object',
            patternProperties: {
              '^.*$': {
                type: 'object',
                properties: {
                  currentVersion: { type: 'string' },
                  latestVersion: { type: 'string' },
                  satisfies: { type: 'boolean' }
                }
              }
            }
          },
          devDependencies: {
            type: 'object',
            patternProperties: {
              '^.*$': {
                type: 'object',
                properties: {
                  currentVersion: { type: 'string' },
                  latestVersion: { type: 'string' },
                  satisfies: { type: 'boolean' }
                }
              }
            }
          }
        }
      }
    }
  }
}

module.exports = schemas
