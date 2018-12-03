import styled from '@emotion/styled'
import Content from '../../components/Content'

export const content = styled(Content)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0.5em 0 0.5em;
  @media (min-width: 48em) {
    padding: 0;
  }
`

export const Description = styled('p')`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  color: #7f7f7f;
  @media (min-width: 48em) {
    font-size: 1rem;
  }
`
