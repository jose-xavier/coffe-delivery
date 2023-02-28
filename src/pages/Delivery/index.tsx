import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import motoboyImg from '../../assets/deliveryImg/motoboy.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { NewDeliveryFormData } from '../Checkout/DeliveryForm'
import { DeliveryPageContainer, OrderDetailsContent, ShopItem } from './styles'

export function Delivery() {
  const location = useLocation()

  const { cidade, estado, paymentMethod, numero, rua, bairro } =
    location.state as NewDeliveryFormData
  const { colors } = useTheme()

  const payment = {
    money: 'Dinheiro',
    debit: 'Cartão de débito',
    credit: 'Cartão de crédito',
  }

  return (
    <DeliveryPageContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <div>
        <OrderDetailsContent>
          <li>
            <InfoWithIcon
              icon={<MapPin weight="fill" />}
              iconColor={colors['purple-300']}
            />
            <div>
              <p>
                Entrega em{' '}
                <ShopItem>
                  {rua}, {numero}
                </ShopItem>
              </p>
              <p>
                {bairro} - {cidade}, {estado}
              </p>
            </div>
          </li>
          <li>
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconColor={colors['yellow-500']}
            />
            <div>
              <p>Previsão de entrega</p>
              <ShopItem>20 min - 30 min</ShopItem>
            </div>
          </li>
          <li>
            <InfoWithIcon
              icon={<CurrencyDollar weight="fill" />}
              iconColor={colors['yellow-700']}
            />
            <div>
              <p>Pagamento de entrega</p>
              <ShopItem>{payment[paymentMethod]}</ShopItem>
            </div>
          </li>
        </OrderDetailsContent>
        <img src={motoboyImg} alt="Entregador de café" />
      </div>
    </DeliveryPageContainer>
  )
}
