import React, { FC, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import MoviesSliderRow from '../MoviesSliderRow/MoviesSliderRow';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadGenres } from '../../store/genres/effects';
import { loadMoviesData } from '../../store/home/effects';
import { selectMoviesData } from '../../store/home/selectors';
import { stringifyGetParamsObj } from '../../utils/utils';
import {
  selectGenresData,
  selectGenresLoading,
} from '../../store/genres/selectors';
import { getMovieTypeTitle } from '../../utils/movieUtils';

const HomePage: FC = () => {
  const isLoadingGenres = useSelector(selectGenresLoading);
  const genres = useSelector(selectGenresData);
  const data = useSelector(selectMoviesData);
  const dispatch = useDispatch();
  const movieTypes = Object.keys(data);

  useEffect(() => {
    dispatch(loadGenres());
    movieTypes.forEach((type) => dispatch(loadMoviesData(type)));
  }, [dispatch]);

  const genresLinks = genres.map((g) => (
    <Col key={g.id} className='col-6 col-lg-3 col-xl-2 col-md-4 mb-2'>
      <Link
        to={{
          pathname: '/movies',
          search: stringifyGetParamsObj({
            with_genres: g.id.toString(),
            page: '1',
          }),
        }}
        className='d-flex justify-content-center align-items-center btn btn-light w-100 h-100 pt-4 pb-4'
        style={{ fontSize: '1.2rem' }}
      >
        {g.name}
      </Link>
    </Col>
  ));

  const movieRows = movieTypes.map((key) => (
    <Row className='mb-5' key={key}>
      <Col>
        <MoviesSliderRow
          title={getMovieTypeTitle(key)}
          movies={data[key].data}
          isLoading={data[key].isLoading}
          typeMovies={key}
        />
      </Col>
    </Row>
  ));

  return (
    <Container className='pt-2 pb-2'>
      <Row className='mb-4 flex-column'>
        <Col>
          <h2 className='font-weight-bold'>Search movies by genres</h2>
        </Col>
        <Col className='d-flex justify-content-center'>
          {isLoadingGenres ? (
            <Spinner animation='border' variant='success' />
          ) : (
            <Row>{genresLinks}</Row>
          )}
        </Col>
      </Row>
      {movieRows}
    </Container>
  );
};

export default HomePage;
