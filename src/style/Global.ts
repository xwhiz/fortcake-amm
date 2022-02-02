import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(images/bg.svg);
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
