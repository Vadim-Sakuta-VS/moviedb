import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import { IMovie } from '../../types/entities';

interface MovieListProps {
  currentPage: number;
  totalPages: number;
  movies: IMovie[];
  onChangePage: (page: number) => void;
}

const MovieList: FC<MovieListProps> = ({
  currentPage,
  totalPages,
  movies,
  onChangePage,
}) => {
  const movieCardsElements = movies.map((m) => (
    <MovieCard key={m.id} movie={m} />
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
