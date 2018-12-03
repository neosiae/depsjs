module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        'targets':
        {
          'node': true
        }
      }
    ],
    '@babel/preset-react'
  ]

  let plugins
  if (process.env['ENV'] === 'prod') {
    plugins = [
      ['emotion', { 'hoist': true }]
    ]
  } else {
    plugins = [
      [
        'emotion',
        { 'sourceMap': true, 'autoLabel': true }
      ]
    ]
  }

  return {
    presets,
    plugins
  }
}
