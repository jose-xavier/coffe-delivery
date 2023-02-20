import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  max-width: 23rem;
  display: flex;

  gap: 1.25rem;
  padding: 1.5rem 0;

  border-bottom: 2px solid ${(props) => props.theme.colors['gray-300']};

  img {
    height: 4rem;
    width: 4rem;
  }
`

export const CoffeeItemContent = styled.div`
  flex: 1;

  .description-coffee {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors['gray-700']};
    }

    strong {
      font-family: 'Roboto';
    }
  }

  .info-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    max-width: 11rem;

    .counter-coffee {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.colors['gray-400']};
      border-radius: 6px;
    }

    button {
      padding: 0.5rem;
      border: 0;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: ${(props) => props.theme.colors['gray-700']};
      background: ${(props) => props.theme.colors['gray-400']};
      border-radius: 6px;

      .icon-color {
        color: ${(props) => props.theme.colors['purple-300']};
      }
    }
  }
`
