import styled from '@emotion/styled'

export const Span = styled('span')`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: #fff;
  text-align: center;
`

export const Content = styled('p')`
  padding: 0.2em;
  background: ${props => props.satisfies ? '#44cc11' : '#e05d44'};
  border-radius: 4px;
  text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
  width: 100%;
  @media (min-width: 62em) {
    width: 50%;
  }
`
