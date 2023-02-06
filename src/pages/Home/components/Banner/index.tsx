import {
  BannerContainer,
  BannerContent,
  BenefitsItens,
  InfoBanner,
} from './styles'
import imageCoffe from '../../../../assets/image-coffe.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  const { colors } = useTheme()

  return (
    <BannerContainer>
      <BannerContent>
        <InfoBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o coffe Delivery vocÊ recebe seu café onde estiver, a qualquer
            hora
          </p>
        </InfoBanner>
        <BenefitsItens>
          <InfoWithIcon
            icon={<ShoppingCart weight="fill" />}
            iconColor={colors['yellow-700']}
            text="Compra simples e segura"
          />

          <InfoWithIcon
            icon={<Package weight="fill" />}
            iconColor={colors['gray-700']}
            text="Embalagem mantém o café intacto"
          />
          <InfoWithIcon
            icon={<Timer weight="fill" />}
            iconColor={colors['yellow-500']}
            text="Entrega rápida e rastreada"
          />

          <InfoWithIcon
            icon={<Coffee weight="fill" />}
            iconColor={colors['purple-300']}
            text="O café chega fresquinho até você"
          />
        </BenefitsItens>
      </BannerContent>
      <img src={imageCoffe} className="imageCoffe" alt="" />
    </BannerContainer>
  )
}
