import styled from '@emotion/styled'

export const Section = styled('section')`
  margin-top: 2em;
`

export const Header = styled('header')`
  display: flex;
  font-weight: bold;
  @media (min-width: 62em) {
    margin: 0 1% 0 1%;
    font-size: 1rem;
  }
`

export const H2 = styled('h2')`
  margin-bottom: 0;
  @media (min-width: 62em) {
    font-size: 1.5rem;
  }
`

export const Head = styled('p')`
  flex: 1;
  text-align: ${props => `${props.textAlign}`};
`

export const List = styled('ul')`
  list-style: none;
  padding: 0;
  margin-top: 0;
`

export const Item = styled('li')`
  margin: 0 -3% 0 -3%;
  border-top: 1px solid rgba(0,0,0,0.1);
  &:nth-of-type(even) {
    background: rgba(0, 0, 0, 0.03);
  }
  @media (min-width: 62em) {
    margin: 0;
  }
`

export const Span = styled('span')`
  margin: 0 3% 0 3%;
  display: flex;
  align-items: center;
  @media (min-width: 62em) {
    margin: 0 1% 0 1%;
  }
`

export const Content = styled('p')`
  flex: 1;
  text-align: ${props => `${props.textAlign}`};
  word-break: break-all;
  @media (min-width: 62em) {
    font-size: 1rem;
  }
`
