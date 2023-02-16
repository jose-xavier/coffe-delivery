import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { CoffeeOrder } from '../CoffeeOrder'
import { CoffeeItem } from './CoffeeItem'
import { DeliveryForm } from './DeliveryForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const { coffeesCart } = useContext(CoffeeContext)
  return (
    <CheckoutContainer>
      <DeliveryForm />
      <CoffeeOrder />
    </CheckoutContainer>
  )
}
