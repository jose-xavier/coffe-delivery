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
  padding: 2.5rem 0;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['gray-200']};
  border-radius: 6px;

  form {
    max-width: 35rem;

    input + input {
      margin-top: 1rem;
    }

    input {
      font-size: 0.875rem;
      padding: 0.75rem;
      border: 0;
      background: ${(props) => props.theme.colors['gray-300']};
      border-radius: 4px;
      color: ${(props) => props.theme.colors['gray-700']};
    }

    input:hover {
      background: ${(props) => props.theme.colors['gray-400']};
    }

    input:nth-child(1) {
      width: 36%;
      margin-top: 2rem;
    }

    input:nth-child(2) {
      width: 100%;
    }

    input:nth-child(3) {
      width: 35.7%;
      margin-right: 0.75rem;
    }

    input:nth-child(4) {
      width: 62%;
    }

    input:nth-child(5) {
      width: 35.5%;
      margin-right: 0.75rem;
    }

    input:nth-child(6) {
      width: 50%;
      margin-right: 0.75rem;
    }

    input:nth-child(7) {
      width: 10%;
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
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors['gray-700']};
    line-height: 1.3;
  }

  .buttons-options {
    display: flex;
    margin-top: 2rem;
    gap: 0.75rem;

    button:hover {
      border: 1px solid ${(props) => props.theme.colors['purple-300']};
    }
  }
`

export const ButtonPayment = styled.button`
  width: 11.125rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  font-size: 0.75rem;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme.colors['gray-700']};
  background: ${(props) => props.theme.colors['gray-400']};

  .icon {
    color: ${(props) => props.theme.colors['purple-300']};
  }
`
