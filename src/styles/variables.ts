import { css } from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

export default css`
  /* ************************ */
  /* ***      COLORS      *** */
  /* ************************ */

  --color-title-active: #191a1a;
  --color-body: #44494b;
  --color-label: #737a7d;
  --color-placeholder: #a4b2b6;
  --color-line: #d6dee1;
  --color-input-background: #f0f3f4;
  --color-background: #f3f6f6;
  --color-off-white: #fcfcfc;

  --color-primary-darker: #a61e17;
  --color-primary-dark: #d63e37;
  --color-primary-default: #fa3e31;
  --color-primary-light: #f99992;
  --color-primary-lighter: #fad7d5;
  --color-primary-lightest: #fcf2f1;

  --color-secondary-darker: #10313b;
  --color-secondary-dark: #1c4450;
  --color-secondary-default: #2c7186;
  --color-secondary-light: #89b2bf;
  --color-secondary-lighter: #c9dee4;
  --color-secondary-lightest: #ecf4f6;

  --color-danger-darker: #63002f;
  --color-danger-dark: #a4004d;
  --color-danger-default: #d90368;
  --color-danger-light: #ed92bd;
  --color-danger-lighter: #f1c1d7;
  --color-danger-lightest: #fcdfec;

  --color-success-darker: #004422;
  --color-success-dark: #00793c;
  --color-success-default: #00a451;
  --color-success-light: #79d7a8;
  --color-success-lighter: #adf4d1;
  --color-success-lightest: #dbffed;

  --color-light-transparent-20: hsla(0, 0%, 99%, 0.2);
  --color-light-transparent-40: hsla(0, 0%, 99%, 0.4);
  --color-light-transparent-60: hsla(0, 0%, 99%, 0.6);
  --color-light-transparent-80: hsla(0, 0%, 99%, 0.8);

  --color-dark-transparent-20: hsla(195, 2%, 10%, 0.2);
  --color-dark-transparent-40: hsla(195, 2%, 10%, 0.4);
  --color-dark-transparent-60: hsla(195, 2%, 10%, 0.6);
  --color-dark-transparent-80: hsla(195, 2%, 10%, 0.8);

  /* ************************ */
  /* ***       FONT       *** */
  /* ************************ */

  --font-family: 'Poppins', sans-serif;

  /*                        weight size / line-height font-family: */
  --font-display-large-heavy: 900 7.2rem / 1.2 var(--font-family);
  --font-display-medium-heavy: 900 4.8rem / 1.2 var(--font-family);

  --font-heading-large: 700 3.6rem / 1.3 var(--font-family);
  --font-heading-medium: 600 2.8rem / 1.3 var(--font-family);
  --font-heading-small: 600 2.4rem / 1.3 var(--font-family);
  --font-heading-x-small: 700 2rem / 1.3 var(--font-family);

  --font-body-large: 400 1.8rem / 1.5 var(--font-family);
  --font-body-large-heavy: 600 1.8rem / 1.5 var(--font-family);
  --font-body-normal: 400 1.6rem / 1.5 var(--font-family);
  --font-body-normal-heavy: 600 1.6rem / 1.5 var(--font-family);
  --font-body-small: 400 1.4rem / 1.5 var(--font-family);
  --font-body-small-heavy: 600 1.4rem / 1.5 var(--font-family);

  --font-button: 600 1.6rem / 1.25 var(--font-family);

  /* MOBILE FONT DEFINITION */

  ${mediaQuery.phoneOnly} {
    --font-display-large-heavy: 900 4rem / 1.2 var(--font-family);
    --font-display-medium-heavy: 900 3.6rem / 1.2 var(--font-family);

    --font-heading-large: 700 3.2rem / 1.3 var(--font-family);
    --font-heading-medium: 600 2.4rem / 1.3 var(--font-family);
    --font-heading-small: 600 2rem / 1.3 var(--font-family);
    --font-heading-x-small: 700 1.8rem / 1.3 var(--font-family);
  }

  /* ************************* */
  /* ***     ELEVATION     *** */
  /* ************************* */

  --elevation-small: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  --elevation-medium: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.04);
  --elevation-large: 0 1.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --elevation-x-large: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.08);

  /* ********************** */
  /* ***     RADIUS     *** */
  /* ********************** */

  --radius-small: 0.6rem;
  --radius-medium: 0.8rem;
  --radius-large: 1.2rem;
  --radius-x-large: 1.6rem;
`;
