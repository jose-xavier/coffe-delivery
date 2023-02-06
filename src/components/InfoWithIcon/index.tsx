import { ReactNode } from 'react'
import { IconContainer, InfoWithContainerProps } from './styles'

interface InfoWithIconProps {
  iconColor: string
  icon: ReactNode
  text?: string
}

export function InfoWithIcon({ icon, iconColor, text }: InfoWithIconProps) {
  return (
    <InfoWithContainerProps>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithContainerProps>
  )
}
