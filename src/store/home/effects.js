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

        const objMovieURL = Object.keys(MOVIE_TYPES).reduce((acc, key) => {
          return { ...acc, [MOVIE_TYPES[key]]: ApiMovies.GET[key] };
        }, {});

        const data = await ApiMovies.loadMovieList(objMovieURL[movieType], {
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
