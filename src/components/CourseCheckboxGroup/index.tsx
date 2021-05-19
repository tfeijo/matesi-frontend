import { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Scope } from '@unform/core';
import Button from '../Button';
import FlagCheckbox from './FlagCheckbox';

import { Container, Slide } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';
import useBreakpoints from '../../hooks/useBreakpoints';

interface Course {
  id: string;
  name: string;
}

type CourseWithInputName = Course & {
  inputName: 'english' | 'spanish' | 'french' | 'korean' | 'german';
};

type CourseCheckboxGroupProps = {
  courses: Course[];
};

export default function CourseCheckboxGroup({
  courses,
}: CourseCheckboxGroupProps) {
  const [isControlLeftDisabled, setIsControlLeftDisabled] = useState(true);
  const [isControlRightDisabled, setIsControlRightDisabled] = useState(false);
  const [numberOfSlides, setNumberOfSlides] = useState(1);

  const isMaxWidth350 = useMediaQuery('(max-width: 350px)');
  const isMaxWidth450 = useMediaQuery('(max-width: 450px)');
  const { isPhoneOnly } = useBreakpoints();

  const slideItemsContainerRef = useRef<HTMLDivElement>(null);

  const coursesWithInputName: CourseWithInputName[] = courses.map(course => {
    if (course.name === 'Inglês') return { ...course, inputName: 'english' };
    if (course.name === 'Espanhol') return { ...course, inputName: 'spanish' };
    if (course.name === 'Francês') return { ...course, inputName: 'french' };
    if (course.name === 'Coreano') return { ...course, inputName: 'korean' };
    if (course.name === 'Alemão') return { ...course, inputName: 'german' };
    return { ...course, inputName: 'english' };
  });

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

  if (!courses) return null;

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
            {coursesWithInputName.map(course => (
              <div className="slide-item" key={course.id}>
                <FlagCheckbox
                  name={course.inputName}
                  label={course.name}
                  course={course.inputName}
                  value={course.id}
                />
              </div>
            ))}
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
