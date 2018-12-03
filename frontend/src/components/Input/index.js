import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'
import * as S from './styles'

export default function Input ({ pathname, service }) {
  const { setState, handleChange } = useContext(FormContext)

  useEffect(() => {
    setState({ pathname: '' })
  }, [service])

  return (
    <S.Input
      name='pathname'
      value={pathname}
      type='text'
      placeholder={
        service === 'npm'
          ? 'package'
          : 'owner/repository'
      }
      onChange={handleChange}
    />
  )
}

Input.propTypes = {
  pathname: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired
}
