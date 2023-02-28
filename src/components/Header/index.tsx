import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, HeaderContainer, HeaderContent, Locale } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartQuantity } = useContext(CoffeeContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <div className="actions">
          <Locale>
            <MapPin size={22} weight="fill" />
            <p>Goiânia - GO</p>
          </Locale>
          <NavLink to="/checkout">
            <CartButton>
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
              <ShoppingCart
                className="cart-container"
                size={22}
                weight="fill"
              />
            </CartButton>
          </NavLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
