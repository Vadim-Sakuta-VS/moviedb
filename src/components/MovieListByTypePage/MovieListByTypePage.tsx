import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import MovieList from '../MovieList/MovieList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import {
  changePage,
  setMoviesType,
  updateData,
} from '../../store/movieList/actionCreators';
import { loadMoviesByType } from '../../store/movieList/effects';
import { getMovieTypeTitle } from '../../utils/movieUtils';
import Loader from '../Loader/Loader';

interface MovieListByTypePageParams {
  type: string;
}

const MovieListByTypePage: FC = () => {
  const { type } = useParams<MovieListByTypePageParams>();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const movies = useSelector(selectMovieList);
  const isMoviesLoading = useSelector(selectMovieListLoading);
  const dispatch = useDispatch();
  const typeTitle = getMovieTypeTitle(type);

  useEffect(() => {
    dispatch(setMoviesType(type));
    dispatch(updateData({ movieType: type }));
  }, [type, dispatch]);

  useEffect(() => {
    dispatch(loadMoviesByType(type));
  }, [currentPage, type, dispatch]);

  const onChangePage = (page: number) => {
    dispatch(changePage(page));
  };

  return (
    <Container className='pt-2 pb-2'>
      <Row className='flex-column'>
        <Col>
          <h1 className='font-weight-bold'>{typeTitle}</h1>
        </Col>
        <Col className='p-0'>
          <Loader isLoading={isMoviesLoading}>
            <MovieList
              currentPage={currentPage}
              totalPages={totalPages}
              movies={movies}
              onChangePage={onChangePage}
            />
          </Loader>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListByTypePage;
