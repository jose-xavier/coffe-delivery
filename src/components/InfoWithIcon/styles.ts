import styled from 'styled-components'

export const InfoWithContainerProps = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface IconConteinerProps {
  iconColor: string
}

export const IconContainer = styled.div<IconConteinerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 999px;
  color: ${(props) => props.theme.colors['gray-100']};
  background: ${({ iconColor }) => iconColor};
`
