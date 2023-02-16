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

interface CoffeCardProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeCardProps) {
  const { addItemToCart, incrementItemAmount, decrementItemAmount } =
    useContext(CoffeeContext)

  const priceCoffeFormatted = numeral(coffee.price).format('0,0.00')

  function handleAddToCart() {
    addItemToCart(coffee)
  }

  function handleIncrementItemAmount(id: number) {
    incrementItemAmount(id)
  }

  function handleDecrementItemAmount(id: number) {
    decrementItemAmount(id)
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
          <MinusButton onClick={() => handleDecrementItemAmount(coffee.id)}>
            <Minus />
          </MinusButton>
          <span>{coffee.amount}</span>
          <PlusButton onClick={() => incrementItemAmount(coffee.id)}>
            <Plus />
          </PlusButton>
          <CartButton onClick={() => handleAddToCart()}>
            <ShoppingCartSimple weight="fill" />
          </CartButton>
        </div>
      </BuyCard>
    </CoffeCardContainer>
  )
}
