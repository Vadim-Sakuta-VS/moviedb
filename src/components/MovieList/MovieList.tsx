import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import { IMovie } from '../../types/entities';
import MovieCardWithDeleteControl from '../MovieCardWithDeleteControl/MovieCardWithDeleteControl';
import { MovieCustomListDeleteOptionsType } from '../../types/params';

interface MovieListProps {
  currentPage: number;
  totalPages: number;
  movies: IMovie[];
  onChangePage: (page: number) => void;
  movieDeleteOptions?: MovieCustomListDeleteOptionsType;
}

const MovieList: FC<MovieListProps> = ({
  currentPage,
  totalPages,
  movies,
  onChangePage,
  movieDeleteOptions,
}) => {
  const movieCardsElements = movies.map((m) => (
    <Col
      key={m.id}
      className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center'
    >
      {movieDeleteOptions !== undefined ? (
        <MovieCardWithDeleteControl movie={m} {...movieDeleteOptions} />
      ) : (
        <MovieCard movie={m} />
      )}
    </Col>
  ));

  return (
    <Container className='pt-2 pb-2'>
      <Row className='justify-content-center align-items-stretch'>
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
