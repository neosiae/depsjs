import styled from '@emotion/styled'

export const Input = styled('input')`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  height: 48px;
  padding-left: 3px;
  &:-webkit-autofill, 
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  @media (min-width: 48em) {
    font-size: 1rem;
    padding-left: 1em; 
  }
`
