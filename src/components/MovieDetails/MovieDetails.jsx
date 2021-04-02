import React from 'react';
import './MovieDetails.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';

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

const MovieDetails = (props) => {
  console.log(props);

  return (
    <Container className='pt-2 pb-2 movie-details'>
      <Row className='pb-2 mb-3 border-bottom movie-details__main-row'>
        <Col>
          <Image
            src='https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg'
            alt='Poster image'
            rounded
            className='w-100'
          />
        </Col>
        <Col>
          <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
            Godzilla vs. Kong
          </Col>
          <Container>
            <MovieDetailsRow title='Budget' value='200000000$' />
            <MovieDetailsRow title='Genres' value='Action, Science Fiction' />
            <MovieDetailsRow title='Production countries'>
              <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                <li>United States of America</li>
                <li>France</li>
                <li>Russia</li>
              </ul>
            </MovieDetailsRow>
            <MovieDetailsRow title='Revenue' value='131532239$' />
            <MovieDetailsRow title='Runtime' value='113m' />
            <MovieDetailsRow title='Status' value='Released' />
            <MovieDetailsRow title='Release date' value='2021-03-24' />
            <MovieDetailsRow title='Tagline' value='"One Will Fall"' />
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
              8.6
            </MovieDetailsRow>
            <MovieDetailsRow title='Vote count' value='2334' />
            <MovieDetailsRow
              title='Overview'
              value='In a time when monsters walk the Earth, humanity’s fight for its
                future sets Godzilla and Kong on a collision course that will
                see the two most powerful forces of nature on the planet collide
                in a spectacular battle for the ages.'
              rowClassAdditional='flex-column'
            />
            <MovieDetailsRow>
              <a href='#' target='_blank'>
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
              <MovieProductionCompany
                logoPath='/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png'
                companyName='Warner Bros. Pictures'
              />
              <MovieProductionCompany
                logoPath='/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png'
                companyName='Legendary Pictures'
              />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
