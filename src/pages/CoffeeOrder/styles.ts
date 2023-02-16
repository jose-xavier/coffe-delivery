import styled from 'styled-components'

export const CoffeeOrderContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2.5rem;

  div + div {
    margin-top: 1.5rem;
  }

  h3 {
    margin-bottom: 3.5rem;
  }
`

export const DescriptionValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p,
  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
  }

  div + div {
    margin-top: 0.75rem;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme.colors['yellow-500']};
  border: 0;
  color: ${(props) => props.theme.colors['gray-100']};
`
