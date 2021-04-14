import {
  hideGenresLoading,
  setGenres,
  setMoviesData,
  setMovieTypeLoading,
  showGenresLoading,
} from './actions';
import { ApiMovies } from '../../api/apiMovies';
import { selectGenres, selectMoviesDataByType } from './selectors';
import { MOVIE_TYPES } from './reducers';

export const loadGenres = () => {
  return async (dispatch, getState) => {
    try {
      const genres = selectGenres(getState());
      if (!genres.data.length) {
        dispatch(showGenresLoading());
        const data = await ApiMovies.loadGenres();
        dispatch(setGenres(data.genres));
      }
    } catch (e) {
      dispatch(hideGenresLoading());
      console.log(e);
    }
  };
};

export const loadMoviesData = (movieType) => {
  return async (dispatch, getState) => {
    try {
      const { data } = selectMoviesDataByType(movieType)(getState());
      if (!data.length) {
        dispatch(setMovieTypeLoading(movieType, true));

        let URL;
        if (movieType === MOVIE_TYPES.NOW_PLAYING) {
          URL = ApiMovies.GET_NOW_PLAYING;
        } else if (movieType === MOVIE_TYPES.POPULAR) {
          URL = ApiMovies.GET_POPULAR;
        } else if (movieType === MOVIE_TYPES.TOP_RATED) {
          URL = ApiMovies.GET_TOP_RATED;
        } else if (movieType === MOVIE_TYPES.UPCOMING) {
          URL = ApiMovies.GET_UPCOMING;
        }

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
