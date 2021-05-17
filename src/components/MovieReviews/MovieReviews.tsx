import React, { useEffect, FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieReview from '../MovieReview/MovieReview';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieReviews,
  selectMovieReviewsCurrentPage,
  selectMovieReviewsLoading,
  selectMovieReviewsTotalPages,
} from '../../store/movieReviews/selectors';
import {
  changePage,
  setMovieId,
} from '../../store/movieReviews/actionCreators';
import { loadMovieReviews } from '../../store/movieReviews/effects';

interface MovieReviewsProps {
  id: number;
}

const MovieReviews: FC<MovieReviewsProps> = ({ id }) => {
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

  const movieReviewsElements = movieReviews.map((r) => (
    <MovieReview
      key={r.id}
      id={r.id}
      author_details={r.author_details}
      content={r.content}
      created_at={r.created_at}
      updated_at={r.updated_at}
      maxContentSymbolsToShow={900}
    />
  ));

  return (
    <Row>
      <Col xs={12}>
        <Row className='flex-column'>
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

export default MovieReviews;
