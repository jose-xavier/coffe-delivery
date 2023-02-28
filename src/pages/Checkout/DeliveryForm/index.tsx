import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  AdressInfo,
  ButtonPayment,
  DeliveryFormContainer,
  FormContainer,
  PaymentInfo,
} from './styles'
import { CoffeeOrder } from '../CoffeeOrder'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../../../context/CoffeeContext'

const newDeliveryFormValidationSchema = zod.object({
  cep: zod.string().min(7, 'CEP precisa ter no no mínimo 7 caracteres'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod
    .number({
      invalid_type_error: 'Por favor insira um número válido',
    })
    .min(1, 'Número deve ser maior que 0'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  estado: zod.string({ required_error: 'Name is required' }),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
})

export type NewDeliveryFormData = zod.infer<
  typeof newDeliveryFormValidationSchema
>

export function DeliveryForm() {
  const { resetCoffeeQuantityCart } = useContext(CoffeeContext)
  const newDeliveryForm = useForm<NewDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
  })

  const navigate = useNavigate()

  function handleCoffeeSubmit(data: NewDeliveryFormData) {
    navigate('/delivery', {
      state: data,
    })
    resetCoffeeQuantityCart()
    toast.success('Pedido efetuado com sucesso')
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = newDeliveryForm

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
        setValue('cidade', data.localidade)
        setValue('rua', data.logadouro)
        setValue('bairro', data.bairro)
      })
  }

  return (
    <FormProvider {...newDeliveryForm}>
      <FormContainer onSubmit={handleSubmit(handleCoffeeSubmit)}>
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

            <div className="form-content">
              <div>
                <input
                  type="text"
                  placeholder="CEP"
                  {...register('cep')}
                  onBlur={checkCEP}
                />
                {errors && <span className="error">{errors.cep?.message}</span>}
              </div>
              <div>
                <input type="text" placeholder="Rua" {...register('rua')} />
                {errors && <span className="error">{errors.rua?.message}</span>}
              </div>
              <div>
                <div className="numero">
                  <input
                    type="number"
                    placeholder="Número"
                    {...register('numero', {
                      valueAsNumber: true,
                    })}
                  />
                  {errors && (
                    <span className="error">{errors.numero?.message}</span>
                  )}
                </div>
                <div className="complemento">
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                  {errors && (
                    <span className="error">{errors.complemento?.message}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="bairro">
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register('bairro')}
                  />
                  {errors && (
                    <span className="error">{errors.bairro?.message}</span>
                  )}
                </div>
                <div className="cidade">
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register('cidade')}
                  />
                  {errors && (
                    <span className="error">{errors.cidade?.message}</span>
                  )}
                </div>
                <div className="estado">
                  <input type="text" placeholder="UF" {...register('estado')} />
                  {errors && (
                    <span className="error">{errors.estado?.message}</span>
                  )}
                </div>
              </div>
            </div>
          </AdressInfo>

          <PaymentInfo>
            <header className="header-payment">
              <CurrencyDollar size={22} className="icon-dollar" />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <div className="buttons-options">
              <ButtonPayment>
                <CreditCard size={12} className="icon" />
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  value="credit"
                />
                CARTÃO DE CRÉDITO
              </ButtonPayment>

              <ButtonPayment>
                <Bank size={12} className="icon" />
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  value="debit"
                />
                CARTÃO DE DÉBITO
              </ButtonPayment>
              <ButtonPayment>
                <Money size={12} className="icon" />
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  value="money"
                />
                DINHEIRO
              </ButtonPayment>
            </div>
            {errors && (
              <span className="error">{errors.paymentMethod?.message}</span>
            )}
          </PaymentInfo>
        </DeliveryFormContainer>
        <CoffeeOrder />
      </FormContainer>
    </FormProvider>
  )
}
