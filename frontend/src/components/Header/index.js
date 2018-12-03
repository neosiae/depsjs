import React from 'react'
import Logo from '../Logo'
import Content from '../Content'
import * as S from './styles'

export default function Header () {
  return (
    <S.Header>
      <Content>
        <Logo />
      </Content>
    </S.Header>
  )
}
