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
import {
  fillArrayFromTo,
  parseGetParamsStr,
  stringifyGetParamsObj,
} from '../../utils/utils';
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
import { createParamObj, getSelectedValues } from '../../utils/selectUtils';

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
    const paramObj = parseGetParamsStr(search);
    if (paramObj.page) {
      dispatch(changePage(+paramObj.page));
    }
  }, []);

  useEffect(() => {
    const paramObj = parseGetParamsStr(search);
    if (!paramObj.page) {
      paramObj.page = 1;
      dispatch(updateData());
    }
    dispatch(loadDiscoverMovies(stringifyGetParamsObj(paramObj)));
  }, [search, dispatch]);

  const onSubmit = (data) => {
    const paramObj = createParamObj(data);
    const paramStr = stringifyGetParamsObj(paramObj);
    if (paramStr !== search) {
      dispatch(updateData());
    }
    paramObj.page = 1;
    history.replace({ pathname, search: stringifyGetParamsObj(paramObj) });
  };

  const onChangePage = (page) => {
    const paramObj = parseGetParamsStr(search);
    paramObj.page = page;
    dispatch(changePage(page));
    history.replace({ pathname, search: stringifyGetParamsObj(paramObj) });
  };

  const votesAverageArr = fillArrayFromTo(0, 10).map((el) => ({
    id: el,
    name: el,
  }));

  const fieldsStructure = {
    with_genres: {
      data: genres,
      isShouldArray: true,
    },
    'vote_average.gte': {
      data: votesAverageArr,
      isShouldArray: true,
    },
    'vote_average.lte': {
      data: votesAverageArr,
      isShouldArray: true,
    },
  };

  const selectedValues = getSelectedValues(fieldsStructure);
  const genresOptions = genres.map((g) => ({ value: g.id, label: g.name }));
  const voteAverageOptions = votesAverageArr.map((v) => ({
    value: v.id,
    label: v.name,
  }));

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <Accordion>
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
                    defaultValues={selectedValues}
                    values={{
                      with_genres: genresOptions,
                      'vote_average-gte': voteAverageOptions,
                      'vote_average-lte': voteAverageOptions,
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
          ) : movies.length ? (
            <MovieList
              currentPage={currentPage}
              totalPages={totalPages}
              movies={movies}
              onChangePage={onChangePage}
            />
          ) : (
            <span className='text-center font-weight-bold text-secondary'>
              Nothing found
            </span>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListFilterPage;
