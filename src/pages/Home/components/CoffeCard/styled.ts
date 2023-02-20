import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1.25rem;
  max-width: 16rem;
  padding: 1.5rem;
`

export const HeaderCard = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;

  .tag {
    display: flex;
    gap: 0.5rem;
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    span {
      background: ${(props) => props.theme.colors['yellow-100']};
      color: ${(props) => props.theme.colors['yellow-700']};
      font-size: 0.625rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  span + span {
    gap: 0.5rem;
  }
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme.colors['gray-600']};
  }
`

export const BuyCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  gap: 1.375rem;

  .price {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    span:first-child {
      font-size: 0.875rem;
    }

    span:nth-child(2) {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
    }
  }

  .cart {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 400;
    }
  }

  button {
    cursor: pointer;
  }

  .buttom-buy:hover {
    background-color: ${(props) => props.theme.colors['purple-300']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['purple-500']};
  color: ${(props) => props.theme.colors['gray-100']};
  border-radius: 8px;
  padding: 0.5rem;
  border: 0;
`

export const MinusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border: 0;
`

export const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  border: 0;
`
