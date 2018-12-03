import React, { useReducer } from 'react'
import { navigate } from '@reach/router'
import Select from '../Select'
import Input from '../Input'
import Button from '../Button'
import * as S from './styles'

const initialState = {
  service: 'npm',
  pathname: ''
}

function reducer (state, newState) {
  return { ...state, ...newState }
}

export const FormContext = React.createContext()

export default function Form () {
  const [state, setState] = useReducer(reducer, initialState)

  function handleChange (event) {
    const { name, value } = event.target
    setState({ [name]: value })
  }

  function handleSubmit (event) {
    event.preventDefault()

    const { service, pathname } = state

    if (pathname.length !== 0) {
      service === 'npm'
        ? navigate(`/package/${pathname}`)
        : navigate(`/${service}/${pathname}`)
    }
  }

  return (
    <FormContext.Provider value={{ setState, handleChange }}>
      <S.Form onSubmit={handleSubmit} autoComplete='off'>
        <Select
          service={state.service}
        />
        <Input
          pathname={state.pathname}
          service={state.service}
        />
        <Button
          service={state.service}
          pathname={state.pathname}
        >
          analyse
        </Button>
      </S.Form>
    </FormContext.Provider>
  )
}
