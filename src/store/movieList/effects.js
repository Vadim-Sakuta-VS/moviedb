import { ApiMovies } from '../../api/apiMovies';
import { setMovies, setMoviesTypeLoading, setTotalPages } from './actions';
import { selectCurrentPage } from './selectors';
import { parseGetParamsStr } from '../../utils/utils';

export const loadMoviesByType = (movieType) => {
  return async (dispatch) => {
    dispatch(loadMovies(ApiMovies.GET[movieType.toUpperCase()]));
  };
};

export const loadDiscoverMovies = (paramStr) => {
  return async (dispatch) => {
    dispatch(loadMovies(ApiMovies.GET.DISCOVER, parseGetParamsStr(paramStr)));
  };
};

export const loadMovies = (URL, paramsObj = {}) => {
  return async (dispatch, getState) => {
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
