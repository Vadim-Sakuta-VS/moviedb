import React from 'react';
import './MovieSlide.scss';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ApiMovies } from '../../api/apiMovies';

const MovieSlide = ({ title, posterPath }) => {
  return (
    <div className='movie-slide'>
      <Image src={ApiMovies.getImage(posterPath)} className='w-100' rounded />
      <div className='movie-slide__inner'>
        <h5 className='movie-slide_inner-title text-center'>{title}</h5>
      </div>
    </div>
  );
};

MovieSlide.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default MovieSlide;
