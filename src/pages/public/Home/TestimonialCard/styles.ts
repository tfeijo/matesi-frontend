import styled from 'styled-components';

import quotationMarkLeftSmall from '../../../../assets/quotation-mark-left-small.svg';
import quotationMarkRightSmall from '../../../../assets/quotation-mark-right-small.svg';
import quotationMarkLeftLarge from '../../../../assets/quotation-mark-left-large.svg';
import quotationMarkRightLarge from '../../../../assets/quotation-mark-right-large.svg';

import mediaQuery from '../../../../utils/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery.tabletPortraitUp} {
    flex-direction: initial;
    justify-content: space-between;
  }
`;

export const About = styled.div`
  text-align: center;

  ${mediaQuery.phoneOnly} {
    margin-bottom: 3.2rem;
  }

  > div {
    position: relative;
    display: inline-block;
  }

  img {
    display: block;
    width: 12.8rem;
    height: 12.8rem;
    object-fit: cover;

    border: 0.3rem solid var(--color-off-white);
    border-radius: var(--radius-x-large);
    box-shadow: var(--elevation-x-large);

    ${mediaQuery.tabletPortraitUp} {
      width: 20rem;
      height: 20rem;
      border-width: 0.6rem;
    }
  }

  svg {
    width: 4.4rem;
    height: auto;

    border: 0.3rem solid var(--color-off-white);
    border-radius: 50%;
    box-shadow: var(--elevation-medium);

    position: absolute;
    bottom: -0.8rem;
    right: -0.8rem;
  }

  p {
    font: var(--font-heading-x-small);
    color: var(--color-title-active);
    margin-top: 1.2rem;
  }
`;

export const Message = styled.p`
  margin: 0 auto;
  text-align: justify;
  max-width: 31.8rem;
  margin: 0 12%;
  position: relative;

  &:before {
    position: absolute;
    content: url(${quotationMarkLeftSmall});
    top: -1.2rem;
    left: -4rem;

    ${mediaQuery.tabletPortraitUp} {
      content: url(${quotationMarkLeftLarge});
      top: -4rem;
      left: -8rem;
    }
  }

  &:after {
    position: absolute;
    content: url(${quotationMarkRightSmall});
    bottom: -1.2rem;
    right: -4rem;

    ${mediaQuery.tabletPortraitUp} {
      content: url(${quotationMarkRightLarge});
      bottom: -4rem;
      right: -8rem;
    }
  }
`;
