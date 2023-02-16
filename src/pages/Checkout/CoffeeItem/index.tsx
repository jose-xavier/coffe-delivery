import { Minus, Plus, Trash } from 'phosphor-react'
import { Coffee } from '../../../data/coffes'
import { CoffeeItemContainer, CoffeeItemContent } from './styles'

interface CoffeeProps {
  coffeesCart: Coffee
}

export function CoffeeItem({ coffeesCart }: CoffeeProps) {
  return (
    <CoffeeItemContainer>
      <img src={`src/assets/${coffeesCart.photo}`} alt="" />
      <CoffeeItemContent>
        <div className="description-coffee">
          <p>{coffeesCart.name}</p>
          <span>{coffeesCart.price}</span>
        </div>
        <div className="info-quantity">
          <div className="counter-coffee">
            <button>
              <Minus size={14} className="icon-color" />
            </button>
            <span>{coffeesCart.amount}</span>
            <button>
              <Plus size={14} className="icon-color" />
            </button>
          </div>

          <button>
            <Trash size={16} className="icon-color" />
            REMOVER
          </button>
        </div>
      </CoffeeItemContent>
    </CoffeeItemContainer>
  )
}
