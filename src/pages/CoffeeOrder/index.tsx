import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { priceFormatted } from '../../utils/formatPrice'
import { CoffeeItem } from '../Checkout/CoffeeItem'
import {
  CoffeeItems,
  CoffeeOrderContainer,
  CoffeeOrderContent,
  ConfirmOrderButton,
  DescriptionValue,
} from './styles'

export function CoffeeOrder() {
  const { coffeesCart } = useContext(CoffeeContext)

  const totalCoffeePrice = coffeesCart.reduce(
    (acc, coffee) => acc + coffee.price * coffee.amount,
    0,
  )

  const deliveryPrice = 3.5

  return (
    <CoffeeOrderContainer>
      <h3>Cafés selecionados</h3>
      <CoffeeOrderContent>
        <CoffeeItems>
          {coffeesCart.map((coffee) => (
            <CoffeeItem coffeesCart={coffee} key={coffee.id} />
          ))}
        </CoffeeItems>
        <DescriptionValue>
          <div className="items-value">
            <p>Total de itens</p>
            <span>{priceFormatted(totalCoffeePrice)}</span>
          </div>
          <div className="delivery-value">
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div className="total-value">
            <strong>Total</strong>
            <strong>{priceFormatted(totalCoffeePrice + deliveryPrice)}</strong>
          </div>
        </DescriptionValue>

        <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
      </CoffeeOrderContent>
    </CoffeeOrderContainer>
  )
}
