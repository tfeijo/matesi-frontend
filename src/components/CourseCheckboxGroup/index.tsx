import { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Scope } from '@unform/core';
import Button from '../Button';
import FlagCheckbox from './FlagCheckbox';

import { Container, Slide } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';
import useBreakpoints from '../../hooks/useBreakpoints';

export default function CourseCheckboxGroup() {
  const [isControlLeftDisabled, setIsControlLeftDisabled] = useState(true);
  const [isControlRightDisabled, setIsControlRightDisabled] = useState(false);
  const [numberOfSlides, setNumberOfSlides] = useState(1);

  const isMaxWidth350 = useMediaQuery('(max-width: 350px)');
  const isMaxWidth450 = useMediaQuery('(max-width: 450px)');
  const { isPhoneOnly } = useBreakpoints();

  const slideItemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMaxWidth350) setNumberOfSlides(1);
    else if (isMaxWidth450) setNumberOfSlides(2);
    else if (isPhoneOnly) setNumberOfSlides(3);
    else setNumberOfSlides(5);

    const slide = slideItemsContainerRef.current;

    function handler() {
      if (slide) {
        const scrollRight = slide.scrollLeft + slide.clientWidth;
        const lastSnapPoint =
          slide.scrollWidth - slide.clientWidth / (numberOfSlides * 2);

        if (scrollRight >= lastSnapPoint) setIsControlRightDisabled(true);
        else if (isControlRightDisabled) setIsControlRightDisabled(false);

        if (scrollRight === slide.clientWidth) setIsControlLeftDisabled(true);
        else if (isControlLeftDisabled) setIsControlLeftDisabled(false);
      }
    }

    slide?.addEventListener('scroll', handler);

    return () => slide?.removeEventListener('scroll', handler);
  }, [
    isControlLeftDisabled,
    isControlRightDisabled,
    isMaxWidth350,
    isMaxWidth450,
    isPhoneOnly,
    numberOfSlides,
  ]);

  function scrollCarousel(to: 'left' | 'right') {
    const slide = slideItemsContainerRef.current;

    if (slide) {
      let distanceToScrollX = Math.round(slide.clientWidth / numberOfSlides);
      if (to === 'left') distanceToScrollX *= -1;

      slide.scrollBy(distanceToScrollX, 0);
    }
  }

  return (
    <Container>
      {isPhoneOnly && (
        <Button
          color="secondary"
          variant="outline"
          iconOnly
          icon={MdChevronLeft}
          className="control-left"
          onClick={() => scrollCarousel('left')}
          disabled={isControlLeftDisabled}
        />
      )}

      <Slide numberOfSlides={numberOfSlides}>
        <Scope path="courses">
          <div className="slide-items-container" ref={slideItemsContainerRef}>
            <div className="slide-item">
              <FlagCheckbox name="english" label="Inglês" course="english" />
            </div>

            <div className="slide-item">
              <FlagCheckbox name="spanish" label="Espanhol" course="spanish" />
            </div>

            <div className="slide-item">
              <FlagCheckbox name="french" label="Francês" course="french" />
            </div>

            <div className="slide-item">
              <FlagCheckbox name="korean" label="Coreano" course="korean" />
            </div>

            <div className="slide-item">
              <FlagCheckbox name="german" label="Alemão" course="german" />
            </div>
          </div>
        </Scope>
      </Slide>

      {isPhoneOnly && (
        <Button
          color="secondary"
          variant="outline"
          iconOnly
          icon={MdChevronRight}
          className="control-right"
          onClick={() => scrollCarousel('right')}
          disabled={isControlRightDisabled}
        />
      )}
    </Container>
  );
}
