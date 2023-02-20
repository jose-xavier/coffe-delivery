import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, HeaderContainer, HeaderContent, Locale } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { cartQuantity } = useContext(CoffeeContext)
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
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
            <ShoppingCart className="cart-container" size={22} weight="fill" />
          </CartButton>
          <a href="http://127.0.0.1:5173/checkout">link</a>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
