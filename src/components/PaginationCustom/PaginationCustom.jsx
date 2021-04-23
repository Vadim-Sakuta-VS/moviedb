import React, { useEffect, useState } from 'react';
import './PaginationCustom.scss';
import { Pagination } from 'react-bootstrap';
import { fillArrayFromTo } from '../../utils/utils';
import PropTypes from 'prop-types';

const PaginationCustom = ({
  currentPage,
  totalPages,
  pagesToShow,
  onChangePage,
}) => {
  const [pagesNumbers, setPagesNumbers] = useState([]);
  const isShowArrows = totalPages > 1;

  useEffect(() => {
    const averagePage = Math.round(pagesToShow / 2);

    if (currentPage <= averagePage) {
      const to = totalPages < pagesToShow ? totalPages : pagesToShow;
      setPagesNumbers(fillArrayFromTo(1, to));
    } else if (currentPage >= totalPages - averagePage + 1) {
      let from = totalPages - pagesToShow + 1;
      from = from < 1 ? 1 : from;
      setPagesNumbers(fillArrayFromTo(from, totalPages));
    } else {
      const from =
        pagesToShow % 2 === 0
          ? currentPage - averagePage
          : currentPage - averagePage + 1;
      setPagesNumbers(fillArrayFromTo(from, currentPage + averagePage - 1));
    }
  }, [currentPage, totalPages, pagesToShow]);

  const onFirstLinkClickHandler = () => {
    onChangePage(1);
  };

  const onLastLinkClickHandler = () => {
    onChangePage(totalPages);
  };

  const onPrevLinkClickHandler = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const onNextLinkClickHandler = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  const pageNumbersItemsElements = pagesNumbers.map((pageNumber) => (
    <Pagination.Item
      key={pageNumber}
      active={pageNumber === currentPage}
      onClick={() => onChangePage(pageNumber)}
    >
      {pageNumber}
    </Pagination.Item>
  ));

  return (
    <Pagination className='justify-content-center'>
      {isShowArrows && (
        <>
          <Pagination.First onClick={onFirstLinkClickHandler} />
          <Pagination.Prev onClick={onPrevLinkClickHandler} />
        </>
      )}
      {pageNumbersItemsElements}
      {isShowArrows && (
        <>
          <Pagination.Next onClick={onNextLinkClickHandler} />
          <Pagination.Last onClick={onLastLinkClickHandler} />
        </>
      )}
    </Pagination>
  );
};

PaginationCustom.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagesToShow: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default PaginationCustom;
