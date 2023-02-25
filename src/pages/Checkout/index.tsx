import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import { DeliveryForm } from './DeliveryForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryForm />
    </CheckoutContainer>
  )
}
