import React from 'react'
import Content from '../Content'
import Link from '../Link'
import * as S from './styles'

export default function Footer () {
  return (
    <S.Footer>
      <Content>
        <p>
          Built with &#10084; by {' '}
          <Link
            href='https://neosiae.com'
            target='_blank'
          >
            neosiae
          </Link>
          .{' '}
          <Link
            href='https://github.com/neosiae/depsjs'
            target='_blank'
          >
            View source code
          </Link>
          .
        </p>
      </Content>
    </S.Footer>
  )
}
