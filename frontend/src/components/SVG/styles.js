import styled from '@emotion/styled'

export const Div = styled('div')`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1); 
  border-radius: 3px;
`

export const Input = styled('input')`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  height: auto;
  padding-left: 0.5em;
  padding-right: 1em;
  @media (min-width: 48em) {
    padding-left: 1em; 
    padding-right: 1em;
  }
`

export const Button = styled('button')`
  border: none;
  font-family: inherit;
  color: inherit; 
  background: #fff;
  cursor: pointer;
  height: 2.2em;
  margin-left: 2px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  } 
  @media (min-width: 48em) {
    padding: 0.5em 1em;
    height: 3em;
    font-size: 1rem;
  }
`
