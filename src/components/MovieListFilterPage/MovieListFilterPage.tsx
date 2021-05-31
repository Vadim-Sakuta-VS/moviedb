import React, { useEffect, FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGenresData,
  selectGenresLoading,
} from '../../store/genres/selectors';
import { loadGenres } from '../../store/genres/effects';
import { useHistory, useLocation } from 'react-router-dom';
import {
  fillArrayFromTo,
  sortArray,
  stringifyGetParamsObj,
  TYPES_SORTING,
} from '../../utils/utils';
import FilterForm from '../FilterForm/FilterForm';
import { loadDiscoverMovies } from '../../store/movieList/effects';
import {
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import MovieList from '../MovieList/MovieList';
import { updateData } from '../../store/movieList/actionCreators';
import {
  createParamObj,
  createValuesSelectField,
  createValuesStructureNumbers,
  getDefaultValuesSelectField,
} from '../../utils/selectUtils';
import { ApiMovies } from '../../api/apiMovies';
import { ParsedQs } from 'qs';
import { ParamObjType } from '../../types/params';
import Loader from '../Loader/Loader';
import AccordionCustom from '../AccordionCustom/AccordionCustom';
import { useCustomRoute } from '../../hooks/useCustomRoute';

const MovieListFilterPage: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const genres = useSelector(selectGenresData);
  const isGenresLoading = useSelector(selectGenresLoading);
  const movies = useSelector(selectMovieList);
  const isMoviesLoading = useSelector(selectMovieListLoading);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const { paramsObj, currentPage, onChangePage } = useCustomRoute({
    handleLocationChange,
  });

  useEffect(() => {
    dispatch(loadGenres());
  }, []);

  function handleLocationChange() {
    dispatch(loadDiscoverMovies(paramsObj));
  }

  const onSubmit = (data: ParamObjType) => {
    const paramsObj = createParamObj(data);
    const paramsStr = stringifyGetParamsObj(paramsObj);
    if (paramsStr !== location.search.slice(1)) {
      dispatch(updateData({ isRequiredUpdate: true }));
      paramsObj.page = '1';
    }
    history.push({
      pathname: location.pathname,
      search: stringifyGetParamsObj(paramsObj),
    });
  };

  const votesAverageArr = createValuesStructureNumbers(fillArrayFromTo(0, 10));
  const defaultGenres = getDefaultValuesSelectField(
    paramsObj.with_genres,
    genres
  );
  const vote_average = paramsObj.vote_average as ParsedQs;
  const defaultVoteAverageGte = getDefaultValuesSelectField(
    vote_average?.gte,
    votesAverageArr
  );
  const defaultVoteAverageLte = getDefaultValuesSelectField(
    vote_average?.lte,
    votesAverageArr
  );
  const releaseYearsArr = createValuesStructureNumbers(
    sortArray(
      fillArrayFromTo(1930, new Date().getFullYear()),
      null,
      TYPES_SORTING.DESC
    )
  );
  const defaultReleaseYear = getDefaultValuesSelectField(
    paramsObj.primary_release_year,
    releaseYearsArr
  );
  const defaultSorting = getDefaultValuesSelectField(
    paramsObj.sort_by,
    ApiMovies.SORTING_TYPES
  );

  return (
    <Container className='pt-2 pb-2'>
      <Loader isLoading={isGenresLoading}>
        <Row>
          <Col>
            <AccordionCustom
              buttonText='Filters'
              buttonIcon={
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
              }
            >
              <FilterForm
                onSubmit={onSubmit}
                defaultValues={{
                  with_genres: defaultGenres,
                  vote_average: {
                    gte: defaultVoteAverageGte,
                    lte: defaultVoteAverageLte,
                  },
                  primary_release_year: defaultReleaseYear,
                  sort_by: defaultSorting,
                  page: paramsObj.page as string,
                }}
                values={{
                  with_genres: createValuesSelectField(genres),
                  vote_average: {
                    gte: createValuesSelectField(votesAverageArr),
                    lte: createValuesSelectField(votesAverageArr),
                  },
                  primary_release_year: createValuesSelectField(
                    releaseYearsArr
                  ),
                  sort_by: createValuesSelectField(ApiMovies.SORTING_TYPES),
                  page: paramsObj.page as string,
                }}
                isLoading={isMoviesLoading}
              />
            </AccordionCustom>
          </Col>
        </Row>
        <Row>
          <Col className='p-0 pt-1'>
            <Loader isLoading={isMoviesLoading}>
              {movies.length ? (
                <MovieList
                  currentPage={currentPage}
                  totalPages={totalPages}
                  movies={movies}
                  onChangePage={onChangePage}
                />
              ) : (
                <p className='text-center font-weight-bold text-secondary'>
                  Nothing found
                </p>
              )}
            </Loader>
          </Col>
        </Row>
      </Loader>
    </Container>
  );
};

export default MovieListFilterPage;
