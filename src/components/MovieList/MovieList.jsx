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
        (async function () {
            let data = await getMoviesData(1);
            setMovies(data.results);
            setCurrentPage(data.page);
            setTotalPages(data.total_pages);
        })();
    }, []);

    async function getMoviesData(pageNumber) {
        try {
            let res = await fetch(API.getPopularMoviesURL(pageNumber));
            return await res.json();
        } catch (e) {
            console.log(e);
        }
    }

    const prevLinkClickHandler = async () => {
        try {
            if (currentPage > 1) {
                let data = await getMoviesData(currentPage - 1);
                setMovies(data.results);
                setCurrentPage(data.page);
                setTotalPages(data.total_pages);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const nextLinkClickHandler = async () => {
        try {
            if (currentPage < totalPages) {
                let data = await getMoviesData(currentPage + 1);
                setMovies(data.results);
                setCurrentPage(data.page);
                setTotalPages(data.total_pages);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const clickLinkHandler = async (pageNumber) => {
        try {
            let data = await getMoviesData(pageNumber);
            setMovies(data.results);
            setCurrentPage(data.page);
            setTotalPages(data.total_pages);
        } catch (e) {
            console.log(e);
        }
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
            />
        </Container>
    );
};

export default MovieList;