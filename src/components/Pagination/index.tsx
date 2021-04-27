/* eslint-disable react/no-array-index-key */
import { MouseEvent, useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useBreakpoints from '../../hooks/useBreakpoints';

import { Container } from './styles';

const HIDDEN_PAGE = 'HIDDEN_PAGE';

type Props = {
  totalPages: number;
  onPageChange: (page: number) => void;
};

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const createRange = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

function Pagination({ totalPages, onPageChange }: Props) {
  const {
    isPhoneOnly,
    isTabletPortraitUp,
    isTabletLandscapeUp,
  } = useBreakpoints();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNeighbors, setPageNeighbors] = useState(0);

  useEffect(() => {
    if (isPhoneOnly) setPageNeighbors(0);
    if (isTabletPortraitUp) setPageNeighbors(1);
    if (isTabletLandscapeUp) setPageNeighbors(2);
  }, [isPhoneOnly, isTabletPortraitUp, isTabletLandscapeUp]);

  const goToPage = (page: number) => {
    onPageChange(page);
    setCurrentPage(page);
  };

  const handleClick = (page: number) => (event: MouseEvent) => {
    event.preventDefault();
    goToPage(page);
  };

  const goToPrevious = (event: MouseEvent) => {
    event.preventDefault();
    goToPage(currentPage - 1);
  };

  const goToNext = (event: MouseEvent) => {
    event.preventDefault();
    goToPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      let pages: Array<number | string> = createRange(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) ... {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = createRange(
            startPage - spillOffset,
            startPage - 1,
          );
          pages = [HIDDEN_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} ... (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = createRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, HIDDEN_PAGE];
          break;
        }

        // handle: (1) ... {4 5} [6] {7 8} ... (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [HIDDEN_PAGE, ...pages, HIDDEN_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return createRange(1, totalPages);
  };

  const pages = getPageNumbers();

  return (
    <Container>
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={goToPrevious}
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
        </li>

        {pages.map((page, index) => {
          if (page === HIDDEN_PAGE)
            return (
              <li key={index}>
                <span>...</span>
              </li>
            );

          return (
            <li key={index}>
              <button
                type="button"
                disabled={page === currentPage}
                className={page === currentPage ? 'active' : ''}
                onClick={handleClick(Number(page))}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={goToNext}
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default Pagination;
