import React, {useEffect, useState} from 'react';
import './PaginationCustom.scss';
import {Pagination} from "react-bootstrap";

const PaginationCustom = ({currentPage, totalPages, pagesToShow, onLinkClick, onPrevLinkClick, onNextLinkClick}) => {
    const [pagesNumbers, setPagesNumbers] = useState([]);

    useEffect(() => {

        const fillPageNumbers = (from, to) => {
            const pageNumbers = [];

            for (let i = from; i <= to; i++) {
                pageNumbers.push(i);
            }

            return pageNumbers;
        }

        const averagePage = Math.round(pagesToShow / 2);

        if (currentPage <= averagePage) {
            const to = totalPages < pagesToShow ? totalPages : pagesToShow;
            setPagesNumbers(
                fillPageNumbers(1, to)
            );
        } else if (currentPage >= totalPages - averagePage + 1) {
            const from = totalPages - pagesToShow + 1;
            setPagesNumbers(fillPageNumbers(from, totalPages));
        } else {
            const from = pagesToShow % 2 === 0 ? currentPage - averagePage : currentPage - averagePage + 1;
            setPagesNumbers(fillPageNumbers(from, currentPage + averagePage - 1));
        }

    }, [currentPage, totalPages, pagesToShow]);

    const pageNumbersItemsElements = pagesNumbers.map(pageNumber => (
        <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onLinkClick(pageNumber)}
        >
            {pageNumber}
        </Pagination.Item>
    ));

    return (
        <Pagination className='justify-content-center'>
            {totalPages > pagesToShow && <Pagination.Prev onClick={() => onPrevLinkClick()}/>}
            {pageNumbersItemsElements}
            {totalPages > pagesToShow && <Pagination.Next onClick={() => onNextLinkClick()}/>}
        </Pagination>
    );
};

export default PaginationCustom;