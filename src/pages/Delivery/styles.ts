import styled from 'styled-components'

export const DeliveryPageContainer = styled.div`
  margin-top: 5rem;
  header {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      color: ${(props) => props.theme.colors['yellow-700']};
    }
    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['gray-700']};
    }
  }
  > div {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const OrderDetailsContent = styled.ul`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 0 2.25rem 0 2.25rem;
  background: ${(props) => props.theme.colors['gray-100']};
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
  li {
    min-width: 27.875rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    & + li {
      margin-top: 3.2rem;
    }
    > div {
      color: ${(props) => props.theme.colors['gray-700']};
    }
  }
`

export const ShopItem = styled.span`
  font-size: 1;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`
