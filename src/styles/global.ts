import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors['gray-100']};
  color: ${(props) => props.theme.colors['gray-700']};
  -webkit-font-something: antialiased;

  h1, h2 , h3, h4, h5, h6, strong {
    font-family: 'Baloo 2', sans-serif;
  }

  body, textarea, input, button, p, span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
  }
}
`
