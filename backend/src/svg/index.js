const { BadgeFactory } = require('gh-badges')

function counter (data) {
  const meta = Object.keys(data).reduce((accumulator, key) => {
    accumulator.total += data[key].meta.total
    accumulator.updated += data[key].meta.updated
    accumulator.outdated += data[key].meta.outdated
    return accumulator
  }, {
    total: 0,
    updated: 0,
    outdated: 0
  })
  return meta
}

function calculatePercentage (updated, total) {
  return Math.round((updated / total) * 100)
}

function generateColor (precentage) {
  if (precentage >= 50 && precentage < 100) {
    return '#dfb317'
  } else if (precentage < 50) {
    return '#e05d44'
  } else {
    return '#4c1'
  }
}

function createText (outdated, total, percentage) {
  if (total === 0) return 'none'

  if (percentage === 100) {
    return 'up to date'
  } else {
    return `${outdated}/${total} outdated`
  }
}

function createSVG (data) {
  const bf = new BadgeFactory()

  if (data.ok === false) {
    const format = {
      text: ['dependencies', 'unknown'],
      colorA: '#555',
      colorB: 'lightgrey',
      template: 'flat'
    }

    const svg = bf.create(format)
    return svg
  } else {
    const { updated, outdated, total } = counter(data)
    const percentage = calculatePercentage(updated, total)
    const color = generateColor(percentage)
    const text = createText(outdated, total, percentage)

    const format = {
      text: ['dependencies', text],
      colorA: '#555',
      colorB: color,
      template: 'flat'
    }

    const svg = bf.create(format)
    return svg
  }
}

module.exports = createSVG
