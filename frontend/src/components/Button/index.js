import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Button ({ children, service, pathname }) {
  return (
    <S.Button>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  service: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
}
