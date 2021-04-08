import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieReview from '../MovieReview/MovieReview';
import PropTypes from 'prop-types';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieReviews,
  selectMovieReviewsCurrentPage,
  selectMovieReviewsLoading,
  selectMovieReviewsTotalPages,
} from '../../store/movieReviews/selectors';
import { changePage, setMovieId } from '../../store/movieReviews/actions';
import { loadMovieReviews } from '../../store/movieReviews/effects';

const MovieReviews = ({ id }) => {
  const movieReviews = useSelector(selectMovieReviews);
  const currentPage = useSelector(selectMovieReviewsCurrentPage);
  const totalPages = useSelector(selectMovieReviewsTotalPages);
  const isLoading = useSelector(selectMovieReviewsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovieId(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(loadMovieReviews());
  }, [currentPage, dispatch]);

  const handleChangePage = () => {
    dispatch(changePage(currentPage + 1));
  };

  const movieReviewsElements = movieReviews.map((r) => {
    console.log(r);
    return (
      <MovieReview
        key={r.id}
        author={r.author_details}
        content={r.content}
        createdAt={r.created_at}
        updatedAt={r.updated_at}
        maxContentSymbolsToShow={900}
      />
    );
  });

  return (
    <Row className=''>
      <Col xs={12}>
        <Row className='flex-column reviews'>
          <Col className='h4 mb-4 text-center font-weight-bold'>Reviews</Col>
          <Col>
            <Container className='pl-lg-5 pr-lg-5 d-flex flex-column align-items-stretch'>
              {totalPages === 0 ? (
                <span className='text-center font-weight-bold text-secondary'>
                  No reviews
                </span>
              ) : (
                movieReviewsElements
              )}
            </Container>
          </Col>
        </Row>
      </Col>
      {(currentPage !== totalPages && totalPages !== 0) ||
      (currentPage === totalPages && isLoading) ? (
        <Col className='text-center'>
          <ButtonLoad
            isLoading={isLoading}
            textValue='Show more'
            handleOnClick={handleChangePage}
            style={{ minWidth: '10rem', minHeight: '38px' }}
          />
        </Col>
      ) : null}
    </Row>
  );
};

MovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieReviews;
