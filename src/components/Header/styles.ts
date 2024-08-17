import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${colors.corPrincipal},
    ${colors.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${colors.corFundo};
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 8px;
      margin-left: 16px;
    }

    span {
      color: ${colors.corFundo};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`
