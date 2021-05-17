import React, { FC } from 'react';
import { Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';
import styled from 'styled-components';

const StyledMovieSlide = styled.div`
  position: relative;
  height: 100%;
  &:hover .movie-slide__inner {
    opacity: 1;
  }
`;

const MovieSlideInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: 0.3s;
`;

interface MovieSlideProps {
  title: string;
  posterPath: ImgPathType;
}

const MovieSlide: FC<MovieSlideProps> = ({ title, posterPath }) => {
  return (
    <StyledMovieSlide>
      <Image
        src={ApiMovies.getImage(posterPath)}
        className='w-100 h-100'
        rounded
      />
      <MovieSlideInner className='movie-slide__inner'>
        <h5 className='text-center pl-1 pr-1'>{title}</h5>
      </MovieSlideInner>
    </StyledMovieSlide>
  );
};

export default MovieSlide;
