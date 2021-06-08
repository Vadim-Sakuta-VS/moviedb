import { GetStaticProps, NextPage } from 'next';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MoviesSliderRow from '../src/components/MoviesSliderRow/MoviesSliderRow';
import { ApiMovies } from '../src/api/apiMovies';
import { IGenre, IMovie } from '../src/types/entities';
import Link from 'next/link';
import { MOVIE_TYPES } from '../src/store/home/constants';
import { KeyStringValueAnyType } from '../src/types/params';
import { withHeaderLayout } from '../src/components/HOC/withHeaderLayout';
import { setGenres } from '../src/store/genres/actionCreators';

type HomePageProps = {
  genres: IGenre[];
  moviesData: {
    [key: string]: IMovie[];
  };
};

const HomePage: NextPage<HomePageProps> = ({ genres, moviesData }) => {
  const dispatch = useDispatch();
  const movieTypes = Object.keys(MOVIE_TYPES);

  useEffect(() => {
    dispatch(setGenres(genres));
  }, [dispatch]);

  const genresLinks = genres.map((g) => (
    <Col key={g.id} className='col-6 col-lg-3 col-xl-2 col-md-4 mb-2'>
      <Link
        href={{
          pathname: '/movies',
          query: { with_genres: g.id.toString(), page: '1' },
        }}
      >
        <a
          className='d-flex justify-content-center align-items-center btn btn-light w-100 h-100 pt-4 pb-4'
          style={{ fontSize: '1.2rem' }}
        >
          {g.name}
        </a>
      </Link>
    </Col>
  ));

  const movieRows = movieTypes.map((key) => (
    <Row className='mb-5' key={key}>
      <Col>
        <MoviesSliderRow
          title={MOVIE_TYPES[key]}
          movies={moviesData[key]}
          typeMovies={key.toLowerCase()}
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
        <Col>
          <Row>{genresLinks}</Row>
        </Col>
      </Row>
      {movieRows}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const genresData = await ApiMovies.loadGenres();

  const moviesData: KeyStringValueAnyType = {};

  const movieTypes = Object.keys(MOVIE_TYPES);
  for (const movieType of movieTypes) {
    const moviesDataByType = await ApiMovies.loadMovieList(
      ApiMovies.GET[movieType],
      {
        page: '1',
      }
    );
    moviesData[movieType] = moviesDataByType.results.slice(0, 10);
  }

  return {
    props: { genres: genresData.genres, moviesData },
    revalidate: 60,
  };
};

export default withHeaderLayout(HomePage);
