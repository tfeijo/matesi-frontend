import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

type Props = { level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' };

export default styled.h1.attrs<Props>(props => ({
  as: props.level,
}))<Props>`
  font: var(--font-heading-large);
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 6.4rem;

  &::before {
    content: '';
    position: absolute;
    width: 7.2rem;
    height: 0.2rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-secondary-default);

    ${mediaQuery.tabletPortraitUp} {
      width: 9.6rem;
    }
  }
`;
