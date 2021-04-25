import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import PropTypes from 'prop-types';
import { IMovie } from '../../types/types';

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

// MovieList.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       overview: PropTypes.string,
//       vote_average: PropTypes.number,
//       vote_count: PropTypes.number,
//       release_date: PropTypes.string,
//       poster_path: PropTypes.oneOfType([
//         PropTypes.string.isRequired,
//         PropTypes.oneOf([null]).isRequired,
//       ]),
//     })
//   ),
// };

export default MovieList;
