import React, { useEffect } from 'react';
import './MovieDetails.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { loadMovieDetails } from '../../store/movieDetails/effects';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieDetails } from '../../store/movieDetails/selectors';

const MovieDetailsRow = ({ title, value, children, rowClassAdditional }) => {
  const resultValue = value || children;
  const classAdditional = rowClassAdditional || '';

  return (
    <Row className={`h5 ${classAdditional}`}>
      {title && <Col className='pr-0 col-auto font-weight-bold'>{title}:</Col>}
      {resultValue && <Col className='pr-0'>{value || children}</Col>}
    </Row>
  );
};

const MovieProductionCompany = ({ logoPath, companyName }) => {
  return (
    <Col className='col-auto production-company production-companies__item'>
      <Image
        src={`${ApiMovies.getImage(logoPath)}`}
        width={100}
        height={100}
        rounded
      />
      <p className='mt-2'>{companyName}</p>
    </Col>
  );
};

const MovieDetails = ({ match: { params } }) => {
  const movie = useSelector(selectMovieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieDetails(params.id));
  }, [params.id, dispatch]);

  if (!movie.id || +params.id !== movie.id) {
    return null;
  }

  const budget = `${movie.budget}$`;
  const genres = movie.genres.map((g) => g.name).join(', ');
  const revenue = `${movie.revenue}$`;
  const runtime = `${movie.runtime}min`;
  const tagline = movie.tagline ? `"${movie.tagline}"` : '---';
  const productionCountriesElements = movie.production_countries.map((c) => (
    <li key={c.iso_3166_1}>{c.name}</li>
  ));
  const productionCompaniesElements = movie.production_companies.map((c) => (
    <MovieProductionCompany
      key={c.id}
      logoPath={c.logo_path}
      companyName={c.name}
    />
  ));

  return (
    <Container className='pt-2 pb-2 movie-details'>
      <Row className='pb-2 mb-3 border-bottom movie-details__main-row'>
        <Col>
          <Image
            src={`${ApiMovies.getImage(movie.poster_path)}`}
            alt='Poster image'
            rounded
            className='w-100'
          />
        </Col>
        <Col>
          <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
            {movie.title}
          </Col>
          <Container>
            <MovieDetailsRow title='Budget' value={budget} />
            <MovieDetailsRow title='Genres' value={genres} />
            <MovieDetailsRow title='Production countries'>
              <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                {productionCountriesElements}
              </ul>
            </MovieDetailsRow>
            <MovieDetailsRow title='Revenue' value={revenue} />
            <MovieDetailsRow title='Runtime' value={runtime} />
            <MovieDetailsRow title='Status' value={movie.status} />
            <MovieDetailsRow title='Release date' value={movie.release_date} />
            <MovieDetailsRow title='Tagline' value={tagline} />
            <MovieDetailsRow title='Vote average'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='#ebcc34'
                className='bi bi-star mr-1'
                viewBox='0 0 16 16'
              >
                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
              </svg>
              {movie.vote_average}
            </MovieDetailsRow>
            <MovieDetailsRow title='Vote count' value={movie.vote_count} />
            <MovieDetailsRow
              title='Overview'
              value={movie.overview}
              rowClassAdditional='flex-column'
            />
            <MovieDetailsRow>
              <a href={movie.homepage} target='_blank' rel='noreferrer'>
                Home page
              </a>
            </MovieDetailsRow>
          </Container>
        </Col>
      </Row>
      <Row className='flex-column'>
        <Col className='h4 mb-4 text-center font-weight-bold'>
          Production companies
        </Col>
        <Col>
          <Container className='pl-5 pr-5'>
            <Row className='justify-content-center production-companies'>
              {productionCompaniesElements}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
