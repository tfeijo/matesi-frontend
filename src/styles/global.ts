import { createGlobalStyle } from 'styled-components';
import variables from './variables';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;

    --font-family-heading: 'Montserrat', sans-serif;
    --font-family-body: 'B612', sans-serif;

    --font-display-1: 900 clamp(4.8rem, 10vw, 7.2rem) / 1 var(--font-family-heading);
    --font-display-2: 900 clamp(3.6rem, 10vw, 4.8rem) / 1.2 var(--font-family-heading);
    --font-headline: 600 clamp(2.8rem, 5vw, 3.6rem) / 1.2 var(--font-family-heading);

    --font-subheading-1: 600 2.4rem/1.2 var(--font-family-heading);
    --font-subheading-2: 600 2.1rem/1.2 var(--font-family-heading);
    --font-subheading-3: 600 1.8rem/1.2 var(--font-family-heading);

    --font-paragraph-big: 400 1.8rem/1.5 var(--font-family-body);
    --font-paragraph: 400 1.6rem/1.5 var(--font-family-body);
    --font-paragraph-bold: 700 1.6rem/1.5 var(--font-family-body);
    --font-paragraph-small: 400 1.4rem/1.5 var(--font-family-body);

    --font-button: 700 1.6rem/1.5 var(--font-family-body);

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
    font: var(--font-body-normal);
  }

  ul li {
    list-style-type: none;
  }

`;
