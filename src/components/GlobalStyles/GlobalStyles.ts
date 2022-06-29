import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants';

const GlobalStyles = createGlobalStyle`
  /* Variables */
  :root {
    --primary: hsl(${COLORS.primary});
    --gray-1: hsl(${COLORS.gray[900]});
    --gray-2: hsl(${COLORS.gray[100]});
    --white: hsl(${COLORS.white});
    --text-color: hsl(${COLORS.gray[700]});
    --font-family: 'Montserrat', sans-serif;
    --box-shadow: 0 6px 9px 0 rgb(0 0 0 / 0.15);
    --box-shadow-nav: 0 2px 18px 0 rgb(0 0 0 / 0.22);
  }

  /* Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    background-color: var(--gray-2);
  }

  h1,
  h2, 
  h3,
  h4 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  /* Utilities */
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-1 {
    flex: 1 1 auto;
  }
  
  .justify-center {
    justify-content: center;
  }

  .items-center {
    align-content: center;
  }

  .p-5 {
    padding: 5px;
  }
  .p-10 {
    padding: 10px;
  }
  .p-20 {
    padding: 20px;
  }
  .p-30 {
    padding: 30px;
  }
  
  .m-5 {
    margin: 5px;
  }
  .m-10 {
    margin: 10px;
  }
  .m-20 {
    margin: 20px;
  }

  .mb-20 {
    margin-bottom: 30px;
  }

  .my-20 {
    margin-block: 20px;
  }

  .b1 {
    background-color: red;
    border: 1px solid;
  }
  .b2 {
    background-color: green;
    border: 1px solid;
  }
  .b3 {
    background-color: blue;
    border: 1px solid;
  }
  .b4 {
    background-color: purple;
    border: 1px solid;
  }

  .container {
    width: min(80rem, 100% - 2rem);
    margin-inline: auto;
  }
`;

export default GlobalStyles;
