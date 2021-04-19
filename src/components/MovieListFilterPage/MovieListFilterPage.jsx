import React, { useEffect } from 'react';
import {
  Accordion,
  Container,
  Row,
  Button,
  Col,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenresData } from '../../store/genres/selectors';
import { loadGenres } from '../../store/genres/effects';
import { useHistory, useLocation } from 'react-router-dom';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';
import FilterForm from '../FilterForm/FilterForm';
import { loadDiscoverMovies } from '../../store/movieList/effects';
import {
  selectCurrentPage,
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import MovieList from '../MovieList/MovieList';
import { changePage, updateData } from '../../store/movieList/actions';

const MovieListFilterPage = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const genres = useSelector(selectGenresData);
  const movies = useSelector(selectMovieList);
  const isMoviesLoading = useSelector(selectMovieListLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  useEffect(() => {
    dispatch(updateData());
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(loadDiscoverMovies(search));
  }, [search, currentPage, dispatch]);

  const onSubmit = (data) => {
    const paramObj = Object.entries(data).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        return { ...acc, [key]: value.map((v) => v.value).join('|') };
      }
      return { ...acc, [key]: value };
    }, {});
    history.replace({ pathname, search: stringifyGetParamsObj(paramObj) });
  };

  const getParamObj = () => {
    const paramObj = parseGetParamsStr(search);
    Object.entries(paramObj).forEach(([key, value]) => {
      paramObj[key] = value.split('|');
    });
    return paramObj;
  };

  const getDefaultGenres = () => {
    const with_genres = paramObj.with_genres;
    if (with_genres) {
      return with_genres.reduce((acc, gParam) => {
        const index = genres.findIndex((g) => +gParam === g.id);
        if (index !== -1) {
          return [
            ...acc,
            { value: genres[index].id, label: genres[index].name },
          ];
        }
        return acc;
      }, []);
    }
    return [];
  };

  const paramObj = getParamObj();
  const genresOptions = genres.map((g) => ({ value: g.id, label: g.name }));
  const defaultGenres = getDefaultGenres();

  const onChangePage = (page) => {
    dispatch(changePage(page));
  };

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <Accordion defaultActiveKey='0'>
            <Row className='mb-1'>
              <Col>
                <Accordion.Toggle
                  as={Button}
                  variant='light'
                  className='d-flex align-items-center'
                  eventKey='0'
                >
                  <span className='mr-1'>Filters</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 0 24 24'
                    width='24px'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' />
                  </svg>
                </Accordion.Toggle>
              </Col>
            </Row>
            <Row>
              <Col className=''>
                <Accordion.Collapse eventKey='0'>
                  <FilterForm
                    onSubmit={onSubmit}
                    defaultValues={{ with_genres: defaultGenres }}
                    values={{
                      with_genres: genresOptions,
                    }}
                    isLoading={isMoviesLoading}
                  />
                </Accordion.Collapse>
              </Col>
            </Row>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col className='p-0 pt-1 d-flex justify-content-center'>
          {isMoviesLoading ? (
            <Spinner animation='border' variant='success' />
          ) : (
            <MovieList
              currentPage={currentPage}
              totalPages={totalPages}
              movies={movies}
              onChangePage={onChangePage}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListFilterPage;
