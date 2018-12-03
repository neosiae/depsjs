import React from 'react'
import * as S from './styles'

export default function Link (props) {
  const { target, children } = props

  const rel = target === '_blank'
    ? 'noopener noreferrer'
    : null

  return (
    <S.Link target={target} rel={rel} {...props}>
      {children}
    </S.Link>
  )
}
