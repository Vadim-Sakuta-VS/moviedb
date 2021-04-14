import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import MoviesSliderRow from '../MoviesSliderRow/MoviesSliderRow';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadGenres,
  loadNowPlayingMovies,
  loadPopularMovies,
  loadTopRatedMovies,
  loadUpcomingMovies,
} from '../../store/home/effects';
import {
  selectGenres,
  selectNowPlayingMovies,
  selectPopularMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
} from '../../store/home/selectors';

const HomePage = () => {
  const { data: genres, isLoading: isLoadingGenres } = useSelector(
    selectGenres
  );
  const {
    data: nowPlayingMovies,
    isLoading: isLoadingNowPlayingMovies,
  } = useSelector(selectNowPlayingMovies);
  const {
    data: popularMovies,
    isLoading: isLoadingPopularMovies,
  } = useSelector(selectPopularMovies);
  const {
    data: topRatedMovies,
    isLoading: isLoadingTopRatedMovies,
  } = useSelector(selectTopRatedMovies);
  const {
    data: upcomingMovies,
    isLoading: isLoadingUpcomingMovies,
  } = useSelector(selectUpcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenres());
    dispatch(loadNowPlayingMovies());
    dispatch(loadPopularMovies());
    dispatch(loadTopRatedMovies());
    dispatch(loadUpcomingMovies());
  }, [dispatch]);

  const genresLinks = genres.map((g) => (
    <Col key={g.id} className='col-6 col-lg-3 col-xl-2 col-md-4 mb-2'>
      <Link
        to={`/movies?with_genres=${g.id}`}
        className='d-flex justify-content-center align-items-center btn btn-light w-100 h-100 pt-4 pb-4'
        style={{ fontSize: '1.2rem' }}
      >
        {g.name}
      </Link>
    </Col>
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
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow
            title='Now Playing'
            movies={nowPlayingMovies}
            isLoading={isLoadingNowPlayingMovies}
          />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow
            title='Popular'
            movies={popularMovies}
            isLoading={isLoadingPopularMovies}
          />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow
            title='Top Rated'
            movies={topRatedMovies}
            isLoading={isLoadingTopRatedMovies}
          />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow
            title='Upcoming'
            movies={upcomingMovies}
            isLoading={isLoadingUpcomingMovies}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
