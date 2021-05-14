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
import { ParamGetObj } from '../../types/params';
import { selectUserDataDetails } from '../userAuth/selectors';
import { ApiAccount } from '../../api/apiAccount';
import { ApiAuth } from '../../api/apiAuth';

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

export const loadUserBasicMovieList = (
  type: keyof typeof ApiAccount.GET,
  paramsObj: ParamGetObj
) => {
  return async (dispatch: Dispatch<any>, getState: GetRootState) => {
    const account_id = selectUserDataDetails(getState()).id;
    paramsObj.session_id = String(ApiAuth.getSessionId());
    dispatch(loadMovies(ApiAccount.GET[type](account_id), paramsObj));
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
        page: currentPage.toString(),
        ...paramsObj,
      });

      dispatch(setMovies(data.results || []));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setMoviesTypeLoading(false));
    }
  };
};
