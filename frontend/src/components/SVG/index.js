import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import copy from 'clipboard-copy'
import * as S from './styles'

export default function SVGLink ({ svgUrl, uri }) {
  const [success, setSuccess] = useState(false)
  const inputElement = useRef(null)

  const depsjsUrl = `${process.env.BASE_URL}${uri}`

  function setInputValue (value) {
    inputElement.current.value = value
  }

  function copyInputValue () {
    copy(inputElement.current.value)
    setSuccess(true)
  }

  useEffect(() => {
    if (success) {
      setInputValue('Link copied to clipboard')
    } else {
      setInputValue(`[![dependency status](${svgUrl})](${depsjsUrl})`)
    }
  }, [success])

  useEffect(() => {
    let timeoutId = null

    if (success) {
      timeoutId = window.setTimeout(() => {
        setSuccess(false)
      }, 2000)
    }

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [success])

  return (
    <S.Div>
      <S.Input ref={inputElement} readOnly={true} />
      <S.Button onClick={copyInputValue}>copy</S.Button>
    </S.Div>
  )
}

SVGLink.propTypes = {
  svgUrl: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired
}
