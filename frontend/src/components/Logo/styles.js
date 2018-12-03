import { Link } from '@reach/router'
import styled from '@emotion/styled'

export const Title = styled('h1')`
  font-weight: 300;
  margin-left: 3%;
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 48em) {
    font-size: 2.2rem;
  }
  @media (min-width: 75em) {
    margin-left: 0;
  }
`

export const Bold = styled('span')`
  font-weight: 600;
`

export const link = styled(Link)`
  color: inherit;
  text-decoration: none;
`
