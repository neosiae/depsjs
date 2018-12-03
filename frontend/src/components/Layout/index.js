import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import * as S from './styles'

export default function Layout ({ children }) {
  return (
    <S.Div>
      <Header />
      {children}
      <Footer />
    </S.Div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
