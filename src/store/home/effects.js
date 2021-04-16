import { setMoviesData, setMovieTypeLoading } from './actions';
import { ApiMovies } from '../../api/apiMovies';
import { selectMoviesDataByType } from './selectors';

export const loadMoviesData = (movieType) => {
  return async (dispatch, getState) => {
    try {
      const { data } = selectMoviesDataByType(movieType)(getState());
      if (!data.length) {
        dispatch(setMovieTypeLoading(movieType, true));

        const data = await ApiMovies.loadMovieList(
          ApiMovies.GET[movieType.toUpperCase()],
          {
            page: 1,
          }
        );

        dispatch(setMoviesData(movieType, data.results.slice(0, 10)));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setMovieTypeLoading(movieType, false));
    }
  };
};
