import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import MovieList from '../MovieList/MovieList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectMovieList,
  selectTotalPages,
} from '../../store/movieList/selectors';
import { changePage, updateData } from '../../store/movieList/actions';
import { loadMovies } from '../../store/movieList/effects';
import { MOVIE_TYPES } from '../../store/home/reducers';

const MovieListByTypePage = () => {
  const { type } = useParams();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const movies = useSelector(selectMovieList);
  const dispatch = useDispatch();
  const title = MOVIE_TYPES.getTitle(type);

  useEffect(() => {
    dispatch(updateData());
  }, [type, dispatch]);

  useEffect(() => {
    dispatch(loadMovies(type));
  }, [currentPage, type, dispatch]);

  const onChangePage = (page) => {
    dispatch(changePage(page));
  };

  return (
    <Container className='pt-2 pb-2'>
      <Row className='flex-column'>
        <Col>
          <h1 className='font-weight-bold'>{title}</h1>
        </Col>
        <Col className='p-0'>
          <MovieList
            currentPage={currentPage}
            totalPages={totalPages}
            movies={movies}
            onChangePage={onChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListByTypePage;
