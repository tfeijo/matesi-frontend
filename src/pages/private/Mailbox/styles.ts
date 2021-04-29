import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const Container = styled.div`
  ${mediaQuery.custom(800)} {
    display: flex;
    height: calc(100vh - 6.4rem);
  }
`;

export const Main = styled.main`
  width: 100%;
  overflow: hidden;

  > div {
    width: 200%;
    height: 100%;
    display: flex;

    ${mediaQuery.tabletLandscapeUp} {
      width: 100%;
    }

    > div {
      flex: 1;
      overflow-y: auto;

      width: 100%;
      height: calc(100vh - 6.4rem - 7.1rem);

      ${mediaQuery.custom(800)} {
        height: 100%;
      }

      ${mediaQuery.tabletLandscapeUp} {
        &:first-of-type {
          flex: 0.6;
        }
      }
    }
  }
`;
