import styled from '@emotion/styled'

export const Wrapper = styled('div')`
  position: relative;
  display: inline;
  margin-right: 2px;
  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    pointer-events: none;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    top: 21px;
    right: 0.5em;
    border-top: 6px solid black;
  }
  @media (min-width: 48em) {
    &:after {
      right: 6px;
    }
  }
`

export const Select = styled('select')`
  appearance: none;
  width: 7.2em;
  font-family: inherit;
  color: inherit;
  background: #fff;
  height: 48px;
  border: none;
  padding-left: 5px;
  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: cornflowerblue;
  }
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  @media (min-width: 48em) {
    padding-left: 0.5em;
    font-size: 1rem;
  }
`
