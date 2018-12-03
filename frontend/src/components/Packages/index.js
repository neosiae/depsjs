import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../Counter'
import Link from '../Link'
import Status from '../Status'
import * as S from './styles'

export default function Packages ({ heading, meta, packages }) {
  if (packages) {
    return (
      <S.Section>
        <S.H2>{heading}</S.H2>
        <Counter meta={meta} />
        <S.Header>
          <S.Head>name</S.Head>
          <S.Head textAlign='center'>current</S.Head>
          <S.Head textAlign='center'>latest</S.Head>
          <S.Head textAlign='right'>status</S.Head>
        </S.Header>
        <S.List>
          {Object.keys(packages).map((name, index) =>
            <S.Item key={name + index}>
              <S.Span>
                <S.Content>
                  <Link
                    target='_blank'
                    href={`${process.env.NPM_URL}/${name}`}
                  >
                    {name}
                  </Link>
                </S.Content>
                <S.Content textAlign='center'>
                  {packages[name].currentVersion}
                </S.Content>
                <S.Content textAlign='center'>
                  {packages[name].latestVersion}
                </S.Content>
                <Status satisfies={packages[name].satisfies} />
              </S.Span>
            </S.Item>
          )}
        </S.List>
      </S.Section>
    )
  } else {
    return null
  }
}

Packages.propTypes = {
  heading: PropTypes.string.isRequired,
  meta: PropTypes.object,
  packages: PropTypes.object
}
