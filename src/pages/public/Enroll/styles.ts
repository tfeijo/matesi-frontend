import styled from 'styled-components';
import { container } from '../../../styles/shared';
import mediaQuery from '../../../utils/mediaQuery';

export const Container = styled.section`
  ${container}
  margin-top: 4.8rem;
  margin-bottom: 6.4rem;

  ${mediaQuery.tabletLandscapeUp} {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;
  }

  h1,
  > p {
    text-align: center;
  }

  h1 {
    font: var(--font-display-medium-heavy);
  }

  > p {
    font: var(--font-body-large);
    margin: 2rem auto 3.2rem;

    ${mediaQuery.tabletLandscapeUp} {
      margin: 3.2rem auto 6.4rem;
    }
  }

  form {
    background-color: var(--color-off-white);
    border-radius: var(--radius-x-large);
    box-shadow: var(--elevation-medium);
    padding: 3.2rem 2.4rem;
    margin: 0 auto;

    > button {
      margin-top: 1.6rem;
    }

    .course-selection {
      margin-bottom: 2.4rem;

      h2 {
        font: var(--font-body);
        color: var(--color-label);
        text-align: center;
      }

      span.courses-error {
        display: inline-block;
        margin-top: 1.6rem;
        font: var(--font-body-small);
        color: var(--color-danger-default);
      }
    }
  }

  > p,
  form {
    max-width: 56rem;
  }
`;

export const FailedLoadingResource = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 0 1.6rem;

  h1 {
    max-width: 40rem;
    text-align: center;
    font: var(--font-heading-small);
  }
`;
