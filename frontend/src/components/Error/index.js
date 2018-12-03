import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Error ({ code, text }) {
  return (
    <S.Div>
      <h1>{code} {text.toLowerCase()}</h1>
    </S.Div>
  )
}

Error.propTypes = {
  code: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
