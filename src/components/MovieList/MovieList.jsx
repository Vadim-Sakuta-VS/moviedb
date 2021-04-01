import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import { ApiMovies } from '../../api/apiMovies';

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiMovies.loadPopularMovieList(currentPage)
      .then((data) => {
        if (!data) {
          throw new Error('Missed data');
        }

        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const movieCardsElements = movies.map((m) => (
    <MovieCard key={m.id} movie={m} />
  ));

  return (
    <Container className='p-2'>
      <Row className='justify-content-center justify-content-md-start'>
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
