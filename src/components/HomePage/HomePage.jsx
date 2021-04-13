import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import MoviesSliderRow from '../MoviesSliderRow/MoviesSliderRow';
import GenresChooser from '../GenresChooser/GenresChooser';

const HomePage = () => {
  const testMovies = [
    {
      id: 1,
      title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    },
    {
      id: 2,
      title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
    {
      id: 3,
      title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    },
    {
      id: 4,
      title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
    {
      id: 5,
      title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    },
    {
      id: 6,
      title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
    {
      id: 7,
      title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    },
    {
      id: 8,
      title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
    {
      id: 9,
      title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    },
    {
      id: 10,
      title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
  ];

  return (
    <Container className='pt-2 pb-2'>
      <Row className='mb-5'>
        <Col>
          <GenresChooser />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow title='Now Playing' movies={testMovies} />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow title='Popular' movies={testMovies} />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow title='Top Rated' movies={testMovies} />
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <MoviesSliderRow title='Upcoming' movies={testMovies} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
