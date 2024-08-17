import { createGlobalStyle } from 'styled-components'

export const colors = {
  corTexto: '#ccc',
  corFundo: '#4B0082',
  corPrincipal: '#8A2BE2',
  corSecundaria: '#9400D3'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.corTexto}
  }

  body {
    background-color: ${colors.corFundo};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
