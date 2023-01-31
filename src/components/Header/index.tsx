import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, HeaderContainer, HeaderContent, Locale } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoCoffeDelivery} alt="" />
        <div className="actions">
          <Locale>
            <MapPin size={22} weight="fill" />
            <p>Goiânia - GO</p>
          </Locale>
          <CartButton>
            <ShoppingCart size={22} />
          </CartButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
