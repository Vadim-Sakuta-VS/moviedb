import React, { FC } from 'react';
import './MovieSlide.scss';
import { Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';

interface MovieSlideProps {
  title: string;
  posterPath: ImgPathType;
}

const MovieSlide: FC<MovieSlideProps> = ({ title, posterPath }) => {
  return (
    <div className='movie-slide'>
      <Image
        src={ApiMovies.getImage(posterPath)}
        className='w-100 h-100'
        rounded
      />
      <div className='movie-slide__inner'>
        <h5 className='movie-slide_inner-title text-center pl-1 pr-1'>
          {title}
        </h5>
      </div>
    </div>
  );
};

export default MovieSlide;
