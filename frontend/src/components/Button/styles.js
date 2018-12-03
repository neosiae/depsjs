import styled from '@emotion/styled'

export const Button = styled('button')`
  border: none;
  font-family: inherit;
  color: inherit; 
  background: #fff;
  cursor: pointer;
  height: 48px;
  margin-left: 2px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  } 
  @media (min-width: 48em) {
    padding: 0.5em 1em;
    font-size: 1rem;
  }
`
