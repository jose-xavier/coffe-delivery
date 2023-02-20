import {
  BuyCard,
  CartButton,
  CoffeCardContainer,
  HeaderCard,
  InfoCard,
  MinusButton,
  PlusButton,
} from './styled'
import numeral from 'numeral'
import { Coffee } from '../../../../data/coffes'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CoffeCardProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeCardProps) {
  const {
    addCoffeeToCart,
    incrementCoffeeAmount,
    decrementCoffeeAmount,
    resetCoffeeQuantity,
  } = useContext(CoffeeContext)

  const priceCoffeFormatted = numeral(coffee.price).format('0,0.00')

  function handleAddToCart(id: number) {
    addCoffeeToCart(coffee)
    resetCoffeeQuantity(id)
    toast.success('Item adicionado ao carrinho')
  }

  function handleIncrementItemAmount(id: number, option: 'cart' | 'list') {
    incrementCoffeeAmount(id, option)
  }

  function handleDecrementItemAmount(id: number, option: 'cart' | 'list') {
    decrementCoffeeAmount(id, option)
  }

  return (
    <CoffeCardContainer>
      <HeaderCard>
        <img src={`src/assets/${coffee.photo}`} alt={coffee.name} />
        <div className="tag">
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
      </HeaderCard>
      <InfoCard>
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </InfoCard>
      <BuyCard>
        <div className="price">
          <span>R$</span>
          <span>{priceCoffeFormatted}</span>
        </div>

        <div className="cart">
          <MinusButton
            onClick={() => handleDecrementItemAmount(coffee.id, 'list')}
          >
            <Minus />
          </MinusButton>
          <span>{coffee.amount}</span>
          <PlusButton
            onClick={() => handleIncrementItemAmount(coffee.id, 'list')}
          >
            <Plus />
          </PlusButton>
          <CartButton
            className="buttom-buy"
            onClick={() => handleAddToCart(coffee.id)}
          >
            <ShoppingCartSimple weight="fill" />
          </CartButton>
        </div>
      </BuyCard>
    </CoffeCardContainer>
  )
}
