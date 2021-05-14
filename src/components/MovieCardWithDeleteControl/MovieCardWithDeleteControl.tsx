import React, { FC } from 'react';
import './MovieCardWithDeleteControl.scss';
import { Col, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../types/entities';
import Loader from '../Loader/Loader';
import { MovieCustomListDeleteOptionsType } from '../../types/params';

interface MovieCardWithDeleteControlProps
  extends MovieCustomListDeleteOptionsType {
  movie: IMovie;
}

const MovieCardWithDeleteControl: FC<MovieCardWithDeleteControlProps> = ({
  movie,
  isDeletingLoading,
  onDeleteMovie,
  manipulationMovieId,
}) => {
  const onDeleteHandler = () => {
    onDeleteMovie && onDeleteMovie(movie.id);
  };

  return (
    <Row className='movie-card-control'>
      <Col className='d-flex'>
        <MovieCard movie={movie} />
      </Col>
      {isDeletingLoading && movie.id === manipulationMovieId ? (
        <Col className='col-auto movie-card-control__col w-100 h-100'>
          <div className='movie-card-control__col-inner d-flex justify-content-center align-items-center'>
            <Loader isLoading={isDeletingLoading} />
          </div>
        </Col>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#000000'
          className='icon-delete'
          onClick={onDeleteHandler}
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
          <title>Delete movie from list</title>
        </svg>
      )}
    </Row>
  );
};

export default MovieCardWithDeleteControl;
