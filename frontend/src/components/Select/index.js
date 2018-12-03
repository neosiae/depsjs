import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from '../Form'
import * as S from './styles'

export default function Select ({ service }) {
  const { handleChange } = useContext(FormContext)

  return (
    <S.Wrapper>
      <S.Select
        name='service'
        value={service}
        onChange={handleChange}
      >
        <option value='npm'>npm</option>
        <option value='github'>github</option>
        <option value='gitlab'>gitlab</option>
        <option value='bitbucket'>bitbucket</option>
      </S.Select>
    </S.Wrapper>
  )
}

Select.propTypes = {
  service: PropTypes.string.isRequired
}
