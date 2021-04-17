import { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import usaFlag from '../../assets/flags/usa-square.svg';
import spainFlag from '../../assets/flags/spain-square.svg';
import franceFlag from '../../assets/flags/france-square.svg';
import koreaFlag from '../../assets/flags/korea-square.svg';
import germanyFlag from '../../assets/flags/germany-square.svg';

import Button from '../Button';

import { Container, Slide, FlagCheckbox } from './styles';
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
        <div className="slide-items-container" ref={slideItemsContainerRef}>
          <div className="slide-item">
            <FlagCheckbox>
              <input type="checkbox" name="course" value="ingles" />
              <img src={usaFlag} alt="Bandeira dos EUA" />
              <p>Inglês</p>
            </FlagCheckbox>
          </div>

          <div className="slide-item">
            <FlagCheckbox>
              <input type="checkbox" name="course" value="espanhol" />
              <img src={spainFlag} alt="Bandeira da Espanha" />
              <p>Espanhol</p>
            </FlagCheckbox>
          </div>

          <div className="slide-item">
            <FlagCheckbox>
              <input type="checkbox" name="course" value="frances" />
              <img src={franceFlag} alt="Bandeira da França" />
              <p>Francês</p>
            </FlagCheckbox>
          </div>

          <div className="slide-item">
            <FlagCheckbox>
              <input type="checkbox" name="course" value="coreano" />
              <img src={koreaFlag} alt="Bandeira da Coreia" />
              <p>Coreano</p>
            </FlagCheckbox>
          </div>

          <div className="slide-item">
            <FlagCheckbox>
              <input type="checkbox" name="course" value="alemao" />
              <img src={germanyFlag} alt="Bandeira da Alemanha" />
              <p>Alemão</p>
            </FlagCheckbox>
          </div>
        </div>
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
