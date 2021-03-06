import {useEffect, useState} from 'react';

const Pagination = ({
  activePage = 1,
  totalPages = 0,
  onPageChanged = () => {
  },
}) => {
  const [isHidden, setHidden] = useState(true);
  const [activePageIndex, setActivePageIndex] = useState(activePage - 1);

  useEffect(() => {
    setHidden(!Boolean(totalPages));
  }, []);

  const goToNextPage = event => {
    goToPage(activePageIndex + 1)(event);
  };

  const goToPrevPage = event => {
    goToPage(activePageIndex - 1)(event);
  };

  const goToPage = (pageIndex) => {
    return event => {
      event.preventDefault();

      if (pageIndex === activePageIndex) return;
      if (pageIndex > totalPages - 1 || pageIndex < 0) return;

      setActivePageIndex(pageIndex);
      onPageChanged(pageIndex);
    }
  };

  return <nav className="os-pagination" hidden={isHidden}>
    <a href="#" className="page-link previous" onClick={goToPrevPage}>
      <i className="bi bi-chevron-left"></i>
    </a>

    <ul className="page-list">
      {
        new Array(totalPages).fill(1).map((_, pageIndex) => {
          const isActive = pageIndex === activePageIndex ? 'active' : '';

          return <li key={pageIndex} onClick={goToPage(pageIndex)}>
            <a href="#" className={`page-link ${isActive}`}>
              {pageIndex + 1}
            </a>
          </li>
        })
      }
    </ul>

    <a href="#" className="page-link next" onClick={goToNextPage}>
      <i className="bi bi-chevron-right"></i>
    </a>
  </nav>
};

export default Pagination;