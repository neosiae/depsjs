import React from 'react'
import { Router } from '@reach/router'
import Analyser from './pages/Analyser'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import GlobalStyles from './helpers/globalStyles'

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path='/'/>
        <Analyser path='package/:name' />
        <Analyser path='package/:scope/:name' />
        <Analyser path=':service/:owner/:name' />
        <NotFound default />
      </Router>
    </>
  )
}
