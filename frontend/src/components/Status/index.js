import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function SVG ({ url }) {
  return (
    <img style={{ display: 'block', marginTop: '0.3em' }} src={url} />
  )
}

SVG.propTypes = {
  url: PropTypes.string.isRequired
}

function Text ({ satisfies }) {
  return (
    <S.Span>
      <S.Content satisfies={satisfies}>
        {satisfies ? 'up to date' : 'out of date'}
      </S.Content>
    </S.Span>
  )
}

Text.propTypes = {
  satisfies: PropTypes.bool
}

export default function Status ({ url, satisfies }) {
  return (
    url
      ? <SVG url={url} />
      : <Text satisfies={satisfies} />
  )
}

Status.propTypes = {
  url: PropTypes.string,
  satisfies: PropTypes.bool
}
