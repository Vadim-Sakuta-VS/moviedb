import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import MoviesSliderRow from '../MoviesSliderRow/MoviesSliderRow';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadGenres, loadMoviesData } from '../../store/home/effects';
import { selectGenres, selectMoviesData } from '../../store/home/selectors';

const HomePage = () => {
  const { data: genres, isLoading: isLoadingGenres } = useSelector(
    selectGenres
  );
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
          search: `?with_genres=${g.id}`,
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
          title={key}
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
