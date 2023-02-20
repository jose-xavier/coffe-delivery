import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 8.75rem;
    font-size: 2rem;
    color: ${(props) => props.theme.colors['gray-900']};
  }
`

export const HomeContent = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.5rem;
  margin-bottom: 10rem;
`
