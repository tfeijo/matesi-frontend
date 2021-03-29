import { css } from 'styled-components';

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

  /* ************************* */
  /* ***     ELEVATION     *** */
  /* ************************* */

  --elevation-small: 0px 2px 4px rgba(0, 0, 0, 0.1);
  --elevation-medium: 0px 8px 16px rgba(0, 0, 0, 0.04);
  --elevation-large: 0px 16px 24px rgba(0, 0, 0, 0.06);
  --elevation-extra-large: 0px 32px 64px rgba(0, 0, 0, 0.08);

  /* ********************** */
  /* ***     RADIUS     *** */
  /* ********************** */

  --radius-small: 0.6rem;
  --radius-medium: 0.6rem;
  --radius-large: 1.2rem;
  --radius-extra-large: 1.6rem;
`;
