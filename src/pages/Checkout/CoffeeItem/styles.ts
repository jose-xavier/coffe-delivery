import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  max-width: 23rem;
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

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
    }

    button {
      padding: 0.5rem;
      border: 0;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: ${(props) => props.theme.colors['gray-700']};

      .icon-color {
        color: ${(props) => props.theme.colors['purple-300']};
      }
    }
  }
`
