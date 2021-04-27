import { createGlobalStyle } from 'styled-components';
import variables from './variables';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;

    ${variables}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    position: relative;
  }

  body {
    background: var(--color-background);
  }

  body, input, textarea {
    font: var(--font-body-normal);
    color: var(--color-body);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-title-active);
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }
`;
