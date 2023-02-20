import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 6.5rem;
  width: 100%;
`

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
    width: 5.25rem;
  }

  .actions {
    display: flex;
    gap: 0.75rem;
  }
`

export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors['purple-100']};
  color: ${(props) => props.theme.colors['purple-500']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  background-color: ${(props) => props.theme.colors['yellow-100']};
  color: ${(props) => props.theme.colors['yellow-700']};
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors['gray-100']};
    background-color: ${(props) => props.theme.colors['yellow-700']};
    position: absolute;
    top: -12px;
    right: -12px;
  }
`
