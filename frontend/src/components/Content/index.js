import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Content ({ children, className }) {
  return (
    <S.Div className={className}>
      {children}
    </S.Div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
