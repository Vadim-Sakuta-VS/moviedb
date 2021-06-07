import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenresData } from '../../src/store/genres/selectors';
import { useCustomRoute } from '../../src/hooks/useCustomRoute';
import { ParamGetObj, ParamObjType } from '../../src/types/params';
import {
  createParamObj,
  createValuesSelectField,
  createValuesStructureNumbers,
  getDefaultValuesSelectField,
} from '../../src/utils/selectUtils';
import {
  fillArrayFromTo,
  sortArray,
  stringifyGetParamsObj,
  TYPES_SORTING,
} from '../../src/utils/utils';
import { ParsedQs } from 'qs';
import { ApiMovies } from '../../src/api/apiMovies';
import { Col, Container, Row } from 'react-bootstrap';
import AccordionCustom from '../../src/components/AccordionCustom/AccordionCustom';
import FilterForm from '../../src/components/FilterForm/FilterForm';
import MovieList from '../../src/components/MovieList/MovieList';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import { IGenre, IMovie } from '../../src/types/entities';
import { setGenres } from '../../src/store/genres/actionCreators';
import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';

type MoviesDataType = {
  genres: IGenre[];
  movies: IMovie[];
  totalPages: number;
};

const MovieListFilterPage: NextPage<MoviesDataType> = ({
  genres: initialGenres,
  movies,
  totalPages,
}) => {
  const router = useRouter();
  const genres = useSelector(selectGenresData);
  const dispatch = useDispatch();
  const { paramsObj, currentPage, onChangePage } = useCustomRoute({});

  useEffect(() => {
    if (!genres.length) {
      dispatch(setGenres(initialGenres));
    }
  }, []);

  const onSubmit = (data: ParamObjType) => {
    const paramsObj = createParamObj(data);
    const paramsStr = stringifyGetParamsObj(paramsObj);
    if (paramsStr !== stringifyGetParamsObj(router.query as ParamGetObj)) {
      paramsObj.page = '1';
    }
    router.push({
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
                primary_release_year: createValuesSelectField(releaseYearsArr),
                sort_by: createValuesSelectField(ApiMovies.SORTING_TYPES),
                page: paramsObj.page as string,
              }}
            />
          </AccordionCustom>
        </Col>
      </Row>
      <Row>
        <Col className='p-0 pt-1'>
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
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const genresData = await ApiMovies.loadGenres();

  const data = await ApiMovies.loadMovieList(
    ApiMovies.GET.DISCOVER,
    query as ParamGetObj
  );

  return {
    props: {
      genres: genresData.genres,
      movies: data.results || [],
      totalPages: data.total_pages,
    },
  };
};

export default withHeaderLayout(MovieListFilterPage);
