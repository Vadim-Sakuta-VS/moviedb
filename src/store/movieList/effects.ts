import { ApiMovies } from '../../api/apiMovies';
import {
  setMovies,
  setMoviesTypeLoading,
  setTotalPages,
} from './actionCreators';
import { selectCurrentPage } from './selectors';
import { parseGetParamsStr } from '../../utils/utils';
import { Dispatch } from 'redux';
import { MovieListAction } from './types';
import { GetRootState } from '../rootStore';

export const loadMoviesByType = (movieType: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadMovies(ApiMovies.GET[movieType.toUpperCase()]));
  };
};

export const loadDiscoverMovies = (paramStr: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadMovies(ApiMovies.GET.DISCOVER, parseGetParamsStr(paramStr)));
  };
};

export const loadMovies = (URL: string, paramsObj = {}) => {
  return async (
    dispatch: Dispatch<MovieListAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setMoviesTypeLoading(true));
      const currentPage = selectCurrentPage(getState());

      const data = await ApiMovies.loadMovieList(URL, {
        page: currentPage,
        ...paramsObj,
      });

      dispatch(setMovies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setMoviesTypeLoading(false));
    }
  };
};
