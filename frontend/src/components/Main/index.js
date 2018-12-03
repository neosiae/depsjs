import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AnalyserContext } from '../../pages/Analyser'
import Content from '../Content'
import Packages from '../Packages'
import Status from '../Status'
import SVGLink from '../SVG'
import * as S from './styles'

const createUrl = (scope, name) => scope
  ? `${process.env.NPM_URL}/${scope}/${name}`
  : `${process.env.NPM_URL}/${name}`

export default function Main ({ data }) {
  const { uri, scope, name } = useContext(AnalyserContext)
  const { dependencies, peerDependencies, devDependencies } = data
  const svgUrl = `${process.env.STATUS_URL}${uri}/status.svg`

  return (
    <S.Main>
      <Content>
        <header style={{ marginBottom: '2em' }}>
          <S.H1>
            <S.link target='_blank' href={createUrl(scope, name)}>
              {scope ? `${scope}/${name}` : name }
            </S.link>
          </S.H1>
          <Status url={svgUrl} />
        </header>
        <SVGLink uri={uri} svgUrl={svgUrl} />
        {dependencies
          ? <Packages
            heading={'dependencies'}
            meta={dependencies.meta}
            packages={dependencies.packages}
          />
          : null
        }
        {peerDependencies
          ? <Packages
            heading={'peerDependencies'}
            meta={peerDependencies.meta}
            packages={peerDependencies.packages}
          />
          : null
        }
        {devDependencies
          ? <Packages
            heading={'devDependencies'}
            meta={devDependencies.meta}
            packages={devDependencies.packages}
          />
          : null
        }
      </Content>
    </S.Main>
  )
}

Main.propTypes = {
  data: PropTypes.object.isRequired
}
