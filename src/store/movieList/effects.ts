import { ApiMovies } from '../../api/apiMovies';
import {
  setMovies,
  setMoviesTypeLoading,
  setTotalPages,
} from './actionCreators';
import { Dispatch } from 'redux';
import { MovieListAction } from './types';
import { GetRootState } from '../rootStore';
import { ParamGetObj } from '../../types/params';
import { selectUserDataDetails } from '../userAuth/selectors';
import { ApiAccount } from '../../api/apiAccount';
import { ApiAuth } from '../../api/apiAuth';

export const loadMoviesByType = (movieType: string, paramsObj: ParamGetObj) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadMovies(ApiMovies.GET[movieType.toUpperCase()], paramsObj));
  };
};

export const loadDiscoverMovies = (paramsObj: ParamGetObj) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadMovies(ApiMovies.GET.DISCOVER, paramsObj));
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
  return async (dispatch: Dispatch<MovieListAction>) => {
    try {
      dispatch(setMoviesTypeLoading(true));
      console.log(paramsObj);

      const data = await ApiMovies.loadMovieList(URL, paramsObj);

      dispatch(setMovies(data.results || []));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setMoviesTypeLoading(false));
    }
  };
};
