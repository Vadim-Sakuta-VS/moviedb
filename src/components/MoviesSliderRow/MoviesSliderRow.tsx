import React, { FC } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './MoviesSliderRow.scss';
import MovieSlide from './MovieSlide';
import { withLinkWrapper } from '../HOC/withLinkWrapper';
import { Link } from 'react-router-dom';
import { IMovie } from '../../types/entities';

SwiperCore.use([Pagination]);

interface MoviesSliderRowProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
  typeMovies: string;
}

const MoviesSliderRow: FC<MoviesSliderRowProps> = ({
  title,
  movies,
  isLoading,
  typeMovies,
}) => {
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
      <Col className='d-flex align-items-center justify-content-between'>
        <h2 className='font-weight-bold'>{title}</h2>
        <Link to={`/movies/${typeMovies}`} className='text-danger'>
          Все
        </Link>
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

export default MoviesSliderRow;
