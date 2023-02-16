import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { CoffeeItem } from '../Checkout/CoffeeItem'
import {
  CoffeeOrderContainer,
  ConfirmOrderButton,
  DescriptionValue,
} from './styles'

export function CoffeeOrder() {
  const { coffeesCart } = useContext(CoffeeContext)
  return (
    <CoffeeOrderContainer>
      <h3>Cafés selecionados</h3>
      <div>
        {coffeesCart.map((coffee) => (
          <CoffeeItem coffeesCart={coffee} key={coffee.id} />
        ))}
      </div>
      <DescriptionValue>
        <div className="items-value">
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </div>
        <div className="delivery-value">
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </div>
        <div className="total-value">
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </DescriptionValue>

      <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
    </CoffeeOrderContainer>
  )
}
