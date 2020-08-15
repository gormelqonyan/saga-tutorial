import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  .container {
    max-width: 1140px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
