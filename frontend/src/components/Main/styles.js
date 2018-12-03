import styled from '@emotion/styled'
import Link from '../Link'

export const Main = styled('main')`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 2em 3% 2em 3%;
  @media (min-width: 75em) {
    margin: 2em 1% 2em 1%;
  }
`

export const H1 = styled('h1')`
  margin-top: 0;
  margin-bottom: 0.2em;
  @media (min-width: 62em) {
    font-size: 2rem;
  }
`

export const link = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover, &:active {
   color: inherit;
  }
`
