import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ToggleButton from './ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenresIds } from '../../store/home/selectors';
import { toggleGenre } from '../../store/home/actions';

const GenresChooser = () => {
  const genresIds = useSelector(selectGenresIds);
  const dispatch = useDispatch();

  const testGenres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  const slidesElements = testGenres.map((g) => (
    <Col className='col-auto mb-2' key={g.id}>
      <ToggleButton
        style={{ minWidth: '7rem' }}
        title={g.name}
        onClick={() => dispatch(toggleGenre(g.id))}
        isActive={genresIds.includes(g.id)}
      />
    </Col>
  ));

  return (
    <Row className='flex-column'>
      <Col>
        <h2 className='font-weight-bold'>Search movies by genres</h2>
      </Col>
      <Col>
        <Row>{slidesElements}</Row>
      </Col>
    </Row>
  );
};

export default GenresChooser;
