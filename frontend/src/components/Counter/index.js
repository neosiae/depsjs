import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Counter ({ meta }) {
  const { total, updated, outdated } = meta

  return (
    <S.P>
      (
      <span>
        total {total}
      </span>
      {', '}
      <span>
        {outdated === 0
          ? 'all up-to-date'
          : `${updated} up-to-date`}
      </span>
      <span>
        {outdated === 0
          ? null
          : `, ${outdated} out-of-date`
        }
      </span>
      )
    </S.P>
  )
}

Counter.propTypes = {
  meta: PropTypes.object.isRequired
}
