import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5.875rem;
`

export const BannerContent = styled.div`
  max-width: 36.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const InfoBanner = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    font-family: 'Roboto';
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
    color: ${(props) => props.theme.colors['gray-900']};
  }
`

export const BenefitsItens = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
