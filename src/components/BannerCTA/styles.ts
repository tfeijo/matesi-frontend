import styled from 'styled-components';

import notepadAndPen from '../../assets/notepad-and-pen.jpg';

import { container } from '../../styles/shared';
import mediaQuery from '../../utils/mediaQuery';

export const Background = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    url(${notepadAndPen});
  background-size: cover;
  background-position: 40% center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  ${container}

  padding-top: 12rem;
  padding-bottom: 12rem;

  ${mediaQuery.tabletPortraitUp} {
    padding-top: 16.4rem;
    padding-bottom: 16.4rem;
  }

  h2 {
    font: var(--font-heading-large);
    color: var(--color-off-white);

    text-align: center;
    max-width: 75.2rem;
    margin: 0 auto 3.2rem;
  }

  div {
    width: max-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    a + a {
      margin-top: 1.6rem;
    }

    ${mediaQuery.tabletPortraitUp} {
      flex-direction: row;

      a + a {
        margin-top: 0;
        margin-left: 1.6rem;
      }
    }
  }
`;
