import numeral from 'numeral'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../context/CoffeeContext'
import { Coffee, coffeesList } from '../../../data/coffes'
import { priceFormatted } from '../../../utils/formatPrice'
import { CoffeeItemContainer, CoffeeItemContent } from './styles'

interface CoffeeProps {
  coffeesCart: Coffee
}

export function CoffeeItem({ coffeesCart }: CoffeeProps) {
  const { incrementCoffeeAmount, decrementCoffeeAmount, removeCoffeeFromCart } =
    useContext(CoffeeContext)

  return (
    <CoffeeItemContainer>
      <img src={`src/assets/${coffeesCart.photo}`} alt="" />
      <CoffeeItemContent>
        <div className="description-coffee">
          <p>{coffeesCart.name}</p>
          <strong>
            {priceFormatted(coffeesCart.price * coffeesCart.amount)}
          </strong>
        </div>
        <div className="info-quantity">
          <div className="counter-coffee">
            <button
              onClick={() => decrementCoffeeAmount(coffeesCart.id, 'cart')}
            >
              <Minus size={14} className="icon-color" />
            </button>
            <span>{coffeesCart.amount}</span>
            <button
              onClick={() => incrementCoffeeAmount(coffeesCart.id, 'cart')}
            >
              <Plus size={14} className="icon-color" />
            </button>
          </div>

          <button onClick={() => removeCoffeeFromCart(coffeesCart.id)}>
            <Trash size={16} className="icon-color" />
            REMOVER
          </button>
        </div>
      </CoffeeItemContent>
    </CoffeeItemContainer>
  )
}
