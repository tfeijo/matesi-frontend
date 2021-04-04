import styled from 'styled-components';
import mediaQuery from '../../../../utils/mediaQuery';

export const Container = styled.div`
  max-width: 27.2rem;
  text-align: center;
  margin: 0 0.8rem;

  & + & {
    margin-top: 7.2rem;

    ${mediaQuery.tabletPortraitUp} {
      margin-top: unset;
    }
  }

  h3 {
    font: var(--font-heading-x-small);
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }
`;
