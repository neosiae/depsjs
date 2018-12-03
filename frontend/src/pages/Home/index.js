import React from 'react'
import Logo from '../../components/Logo'
import Form from '../../components/Form'
import * as S from './styles'

export default function Home () {
  return (
    <>
      <main>
        <S.content>
          <Logo />
          <Form />
          <S.Description>
            keep your JavaScript dependencies secure and up-to-date
          </S.Description>
        </S.content>
      </main>
    </>
  )
}
