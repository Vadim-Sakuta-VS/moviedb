import React, { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import Link from 'next/link';
import { IMovie } from '../../types/entities';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 400px;
  min-height: 382px;

  &:hover .movie-card__body {
    opacity: 1;
    visibility: visible;
  }
`;

const CardLink = styled.a`
  height: 100%;

  img {
    height: inherit;
  }

  @media (max-width: 1023px) {
    height: auto;
  }
`;

const StyledCardBody = styled(Card.Body)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  overflow: auto;

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 1023px) {
    position: static;
    height: auto;
    opacity: 1;
    visibility: visible;
  }
`;

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const overview =
    movie.overview.length > 100
      ? `${movie.overview.slice(0, 100)}...`
      : movie.overview;

  return (
    <StyledCard className='flex-grow-1'>
      <Link href={`/movie/${movie.id}`}>
        <CardLink>
          <Card.Img variant='top' src={ApiMovies.getImage(movie.poster_path)} />
        </CardLink>
      </Link>
      <StyledCardBody className='movie-card__body bg-white'>
        <Card.Title className='font-weight-bold border-bottom border-success'>
          <Link href={`/movie/${movie.id}`}>
            <a>{movie.title}</a>
          </Link>
        </Card.Title>
        <Container className='p-0 mb-2'>
          <Col className='p-0 font-weight-bold h6 mb-1'>Overview:</Col>
          <Col className='p-0'>{overview}</Col>
        </Container>
        <Container className='p-0 mb-2'>
          <Row className='ml-0 align-items-center'>
            <Col className='p-0 m-0 font-weight-bold'>Vote average:</Col>
            <Col className='p-0 d-flex align-items-center'>
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
              <p className='m-0'>{movie.vote_average}</p>
            </Col>
          </Row>
        </Container>
        <Container className='p-0 mb-2'>
          <Row className='ml-0 align-items-center'>
            <Col className='p-0 m-0 font-weight-bold'>Vote count:</Col>
            <Col className='p-0'>{movie.vote_count}</Col>
          </Row>
        </Container>
        <Container className='p-0'>
          <Row className='ml-0 align-items-center'>
            <Col className='p-0 m-0 font-weight-bold'>Release date:</Col>
            <Col className='p-0'>{movie.release_date}</Col>
          </Row>
        </Container>
      </StyledCardBody>
    </StyledCard>
  );
};

export default MovieCard;
