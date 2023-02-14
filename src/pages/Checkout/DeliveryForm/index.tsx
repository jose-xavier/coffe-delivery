import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AdressInfo,
  ButtonPayment,
  DeliveryFormContainer,
  PaymentInfo,
} from './styles'

export function DeliveryForm() {
  return (
    <DeliveryFormContainer>
      <h3>Complete seu pedido</h3>

      <AdressInfo>
        <header>
          <MapPinLine size={22} className="locale" />
          <div>
            <strong>Endereço de Entrega</strong>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <form action="">
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </form>
      </AdressInfo>

      <PaymentInfo>
        <header className="header-payment">
          <CurrencyDollar size={22} className="icon-dollar" />
          <div>
            <strong>Pagamento</strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>
        <div className="buttons-options">
          <ButtonPayment>
            <CreditCard size={12} className="icon" />
            CARTÃO DE CRÉDITO
          </ButtonPayment>

          <ButtonPayment>
            <Bank size={12} className="icon" />
            CARTÃO DE DÉBITO
          </ButtonPayment>
          <ButtonPayment>
            <Money size={12} className="icon" />
            DINHEIRO
          </ButtonPayment>
        </div>
      </PaymentInfo>
    </DeliveryFormContainer>
  )
}
