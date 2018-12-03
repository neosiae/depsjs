import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import Main from '../../components/Main'
import Error from '../../components/Error'
import Spinner from '../../components/Spinner'

export const AnalyserContext = React.createContext()

export default function Analyser ({ uri, scope, name }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState({
    error: false,
    code: '',
    text: ''
  })

  async function request () {
    let response
    try {
      response = await fetch(`${process.env.API_URL}${uri}`)
    } catch (err) {
      console.log(err)
    }

    if (response.ok) {
      const json = await response.json()
      setData(json)
    } else {
      setError({
        error: true,
        code: response.status,
        text: response.statusText
      })
    }
  }

  useEffect(() => {
    request()
  }, [])

  return (
    <AnalyserContext.Provider value={{ uri, scope, name }}>
      <Layout>
        {!error.error
          ? data !== null
            ? <Main data={data} />
            : <Spinner />
          : <Error code={error.code} text={error.text} />
        }
      </Layout>
    </AnalyserContext.Provider>
  )
}

Analyser.propTypes = {
  scope: PropTypes.string,
  uri: PropTypes.string,
  name: PropTypes.string
}
