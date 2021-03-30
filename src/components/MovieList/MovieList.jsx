import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import {API} from '../../api/api';
import PaginationCustom from "../PaginationCustom/PaginationCustom";

const MovieList = () => {
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMoviesData(1);
    }, []);

    async function setMoviesData(pageNumber) {
        try {
            let res = await fetch(API.getPopularMoviesURL(pageNumber));
            let data = await res.json();
            setMovies(data.results);
            setCurrentPage(data.page);
            setTotalPages(data.total_pages);
        } catch (e) {
            console.log(e);
        }
    }

    const firstLinkClickHandler = () => {
        setMoviesData(1);
    }

    const lastLinkClickHandler = () => {
        setMoviesData(totalPages);
    }

    const prevLinkClickHandler = () => {
        if (currentPage > 1) {
            setMoviesData(currentPage - 1);
        }
    }

    const nextLinkClickHandler = () => {
        if (currentPage < totalPages) {
            setMoviesData(currentPage + 1);
        }
    }

    const clickLinkHandler = (pageNumber) => {
        setMoviesData(pageNumber);
    }

    let movieCardsElements = movies.map(m => (
        <MovieCard
            key={m.id}
            title={m.title}
            overview={m.overview}
            voteAverage={m.vote_average}
            voteCount={m.vote_count}
            releaseDate={m.release_date}
            posterPath={m.poster_path}
        />
    ));

    return (
        <Container className='p-2'>
            <Row className='justify-content-center justify-content-md-start'>
                {movieCardsElements}
            </Row>
            <PaginationCustom
                currentPage={currentPage}
                totalPages={totalPages}
                pagesToShow={7}
                onLinkClick={clickLinkHandler}
                onPrevLinkClick={prevLinkClickHandler}
                onNextLinkClick={nextLinkClickHandler}
                onFirstLinkClick={firstLinkClickHandler}
                onLastLinkClick={lastLinkClickHandler}
            />
        </Container>
    );
};

export default MovieList;