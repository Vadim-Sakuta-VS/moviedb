import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectMovieList,
  selectTotalPages,
} from '../../store/movieList/selectors';
import { changePage, loadPopularMovies } from '../../store/movieList/actions';

const MovieList = () => {
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const movies = useSelector(selectMovieList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularMovies(currentPage));
  }, [currentPage, dispatch]);

  const onChangePage = (page) => {
    dispatch(changePage(page));
  };

  const movieCardsElements = movies.map((m) => (
    <MovieCard key={m.id} movie={m} />
  ));

  return (
    <Container className='p-2'>
      <Row className='justify-content-center justify-content-md-start'>
        {movieCardsElements}
      </Row>
      <PaginationCustom
        currentPage={currentPage}
        totalPages={totalPages}
        pagesToShow={7}
        onChangePage={onChangePage}
      />
    </Container>
  );
};

export default MovieList;
