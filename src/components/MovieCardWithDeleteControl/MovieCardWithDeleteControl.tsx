import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../types/entities';
import Loader from '../Loader/Loader';
import { MovieCustomListDeleteOptionsType } from '../../types/params';
import styled from 'styled-components';

const MovieCardControl = styled(Row)`
  position: relative;

  &:hover .movie-card__body {
    opacity: 1;
    visibility: visible;
  }
`;

const MovieCardControlCol = styled(Col)`
  position: absolute;
  top: 0;
  left: 0;
`;

const MovieCardControlColInner = styled.div`
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const IconDelete = styled.svg`
  position: absolute;
  bottom: 5px;
  right: 17px;
  fill: #ff0000ff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

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
    <MovieCardControl>
      <Col className='d-flex'>
        <MovieCard movie={movie} />
      </Col>
      {isDeletingLoading && movie.id === manipulationMovieId ? (
        <MovieCardControlCol className='col-auto w-100 h-100'>
          <MovieCardControlColInner className='d-flex justify-content-center align-items-center'>
            <Loader isLoading={isDeletingLoading} />
          </MovieCardControlColInner>
        </MovieCardControlCol>
      ) : (
        <IconDelete
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
        </IconDelete>
      )}
    </MovieCardControl>
  );
};

export default MovieCardWithDeleteControl;
