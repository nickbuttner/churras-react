import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${({ theme }) => css`
  body {
    font-family: "Raleway", sans-serif;
    margin: 0;
    background-color: ${theme.colors.bg};
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`}
`;

export default GlobalStyles;
