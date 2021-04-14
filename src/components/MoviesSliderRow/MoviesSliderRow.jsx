import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './MoviesSliderRow.scss';
import MovieSlide from './MovieSlide';
import PropTypes from 'prop-types';
import { withLinkWrapper } from '../HOC/withLinkWrapper';

SwiperCore.use([Pagination]);

const MoviesSliderRow = ({ title, movies, isLoading }) => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    530: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  };

  const slidersElements = movies.map((m) => (
    <SwiperSlide key={m.id}>
      {withLinkWrapper(
        `/movie/${m.id}`,
        <MovieSlide title={m.title} posterPath={m.poster_path} />
      )}
    </SwiperSlide>
  ));

  return (
    <Row className='flex-column'>
      <Col>
        <h2 className='font-weight-bold'>{title}</h2>
      </Col>
      <Col className='d-flex justify-content-center'>
        {isLoading ? (
          <Spinner animation='border' variant='success' />
        ) : (
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={breakpoints}
          >
            {slidersElements}
          </Swiper>
        )}
      </Col>
    </Row>
  );
};

MoviesSliderRow.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]),
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

export default MoviesSliderRow;
