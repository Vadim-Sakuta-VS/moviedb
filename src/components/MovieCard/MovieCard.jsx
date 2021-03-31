import React from 'react';
import './MovieCard.scss';
import {Card, Col, Container, Row} from "react-bootstrap";
import {ApiMovies} from "../../api/apiMovies";

const MovieCard = ({movie}) => {
    return (
        <Card className='mb-4 movie-card flex-grow-1'>
            <Card.Img variant="top" src={ApiMovies.getImage(movie.poster_path)} />
            <Card.Body>
                <Card.Title className='font-weight-bold border-bottom border-success'>{movie.title}</Card.Title>
                <Container className='p-0 mb-2'>
                    <Col className='p-0 font-weight-bold h5 mb-1'>
                        Overview:
                    </Col>
                    <Col className='p-0'>
                        {movie.overview}
                    </Col>
                </Container>
                <Container className='p-0 mb-2'>
                    <Row className='ml-0 align-items-center'>
                        <Col className='p-0 m-0 font-weight-bold h5'>
                            Vote average:
                        </Col>
                        <Col className='p-0 d-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ebcc34"
                                 className="bi bi-star mr-1" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                            </svg>
                            <p className='m-0'>{movie.vote_average}</p>
                        </Col>
                    </Row>
                </Container>
                <Container className='p-0 mb-2'>
                    <Row className='ml-0 align-items-center'>
                        <Col className='p-0 m-0 font-weight-bold h5'>
                            Vote count:
                        </Col>
                        <Col className='p-0'>
                            {movie.vote_count}
                        </Col>
                    </Row>
                </Container>
                <Container className='p-0'>
                    <Row className='ml-0 align-items-center'>
                        <Col className='p-0 m-0 font-weight-bold h5'>
                            Release date:
                        </Col>
                        <Col className='p-0'>
                            {movie.release_date}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;