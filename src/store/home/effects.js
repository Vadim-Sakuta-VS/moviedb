import { setMoviesData, setMovieTypeLoading } from './actions';
import { ApiMovies } from '../../api/apiMovies';
import { selectMoviesDataByType } from './selectors';

export const loadMoviesData = (movieType) => {
  return async (dispatch, getState) => {
    try {
      const { data } = selectMoviesDataByType(movieType)(getState());
      if (!data.length) {
        dispatch(setMovieTypeLoading(movieType, true));

        const URL = ApiMovies.getMovieURLByType(movieType);
        const data = await ApiMovies.loadMovieList(URL, {
          page: 1,
        });

        dispatch(setMoviesData(movieType, data.results.slice(0, 10)));
      }
    } catch (e) {
      dispatch(setMovieTypeLoading(movieType, false));
      console.log(e);
    }
  };
};
