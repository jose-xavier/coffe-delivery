import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, HeaderContainer, HeaderContent, Locale } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoCoffeeDelivery} alt="" />
        <div className="actions">
          <Locale>
            <MapPin size={22} weight="fill" />
            <p>Goiânia - GO</p>
          </Locale>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
          <a href="http://127.0.0.1:5173/checkout">link</a>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
