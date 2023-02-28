import styled from 'styled-components'

export const DeliveryFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  max-width: 40rem;

  header {
    display: flex;
    gap: 0.5rem;

    strong {
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme.colors['gray-900']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.2;
      color: ${(props) => props.theme.colors['gray-900']};
    }

    .locale {
      color: ${(props) => props.theme.colors['yellow-700']};
    }
  }
`

export const AdressInfo = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 2.5rem 2.5rem 3rem 2.5rem;
  background: ${(props) => props.theme.colors['gray-200']};
  border-radius: 8px;

  .form-content {
    width: 100%;
    max-width: 35rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 1.5rem;

    input {
      font-size: 0.875rem;
      padding: 0.75rem;
      border: 0;
      background: ${(props) => props.theme.colors['gray-400']};
      border-radius: 4px;
      color: ${(props) => props.theme.colors['gray-900']};
    }
    input:hover {
      background: ${(props) => props.theme.colors['gray-400']};
    }

    div:nth-child(1) {
      display: flex;
      flex-direction: row;

      input {
        width: 12.5rem;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;

      input {
        width: 100%;
      }
    }

    div:nth-child(3) {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-right: 0.75rem;

      .numero > input {
        width: 12.5rem;
      }

      .complemento > input {
        width: 21.75rem;
      }
    }
  }

  div:nth-child(4) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

    .bairro > input {
      width: 12.5rem;
    }

    .cidade > input {
      width: 17.25rem;
    }

    .estado > input {
      width: 3.75rem;
    }
  }
`

export const PaymentInfo = styled.div`
  border-radius: 6px;
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['gray-200']};

  .header-payment {
    display: flex;
    gap: 0.5rem;

    .icon-dollar {
      color: ${(props) => props.theme.colors['purple-300']};
    }
  }

  div > p {
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors['gray-700']};
    line-height: 1.3;
  }

  .buttons-options {
    display: flex;
    margin-top: 2rem;
    gap: 0.75rem;
  }
`

export const ButtonPayment = styled.label`
  width: 11.5rem;
  display: flex;

  justify-content: flex-start;
  gap: 0.25em;
  align-items: center;
  padding: 1.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['gray-700']};
  background: ${(props) => props.theme.colors['gray-400']};

  &:hover {
    outline: 1px solid ${(props) => props.theme.colors['purple-300']};
  }

  .icon {
    color: ${(props) => props.theme.colors['purple-300']};
  }
`

export const FormContainer = styled.form`
  .error {
    color: #ff0000;
    position: absolute;
    font-size: 0.75rem;
    margin-top: 2.5rem;
  }
`
