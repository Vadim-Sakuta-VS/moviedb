import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieList from '../MovieList/MovieList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import { changePage, updateData } from '../../store/movieList/actions';
import { loadMoviesByType } from '../../store/movieList/effects';
import { getMovieTypeTitle } from '../../utils/movieUtils';

const MovieListByTypePage = () => {
  const { type } = useParams();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const movies = useSelector(selectMovieList);
  const isMoviesLoading = useSelector(selectMovieListLoading);
  const dispatch = useDispatch();
  const typeTitle = getMovieTypeTitle(type);

  useEffect(() => {
    dispatch(updateData());
  }, [type, dispatch]);

  useEffect(() => {
    dispatch(loadMoviesByType(type));
  }, [currentPage, type, dispatch]);

  const onChangePage = (page) => {
    dispatch(changePage(page));
  };

  return (
    <Container className='pt-2 pb-2'>
      <Row className='flex-column'>
        <Col>
          <h1 className='font-weight-bold'>{typeTitle}</h1>
        </Col>
        <Col className='p-0 d-flex justify-content-center'>
          {isMoviesLoading ? (
            <Spinner animation='border' variant='success' />
          ) : (
            <MovieList
              currentPage={currentPage}
              totalPages={totalPages}
              movies={movies}
              onChangePage={onChangePage}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListByTypePage;
