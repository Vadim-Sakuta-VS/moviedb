import {
  hideGenresLoading,
  hideNowPlayingMoviesLoading,
  hidePopularMoviesLoading,
  hideTopRatedMoviesLoading,
  hideUpcomingMoviesLoading,
  setGenres,
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  showGenresLoading,
  showNowPlayingMoviesLoading,
  showPopularMoviesLoading,
  showTopRatedMoviesLoading,
  showUpcomingMoviesLoading,
} from './actions';
import { ApiMovies } from '../../api/apiMovies';
import { selectGenres, selectNowPlayingMovies } from './selectors';

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

export const loadNowPlayingMovies = () => {
  return async (dispatch, getState) => {
    try {
      const nowPlayingMovies = selectNowPlayingMovies(getState());
      if (!nowPlayingMovies.data.length) {
        dispatch(showNowPlayingMoviesLoading());
        const data = await ApiMovies.loadMovieList(ApiMovies.GET_NOW_PLAYING, {
          page: 1,
        });
        dispatch(setNowPlayingMovies(data.results.slice(0, 10)));
      }
    } catch (e) {
      dispatch(hideNowPlayingMoviesLoading());
      console.log(e);
    }
  };
};

export const loadPopularMovies = () => {
  return async (dispatch, getState) => {
    try {
      const popularMovies = selectNowPlayingMovies(getState());
      if (!popularMovies.data.length) {
        dispatch(showPopularMoviesLoading());
        const data = await ApiMovies.loadMovieList(ApiMovies.GET_POPULAR, {
          page: 1,
        });
        dispatch(setPopularMovies(data.results.slice(0, 10)));
      }
    } catch (e) {
      dispatch(hidePopularMoviesLoading());
      console.log(e);
    }
  };
};

export const loadTopRatedMovies = () => {
  return async (dispatch, getState) => {
    try {
      const topRatedMovies = selectNowPlayingMovies(getState());
      if (!topRatedMovies.data.length) {
        dispatch(showTopRatedMoviesLoading());
        const data = await ApiMovies.loadMovieList(ApiMovies.GET_TOP_RATED, {
          page: 1,
        });
        dispatch(setTopRatedMovies(data.results.slice(0, 10)));
      }
    } catch (e) {
      dispatch(hideTopRatedMoviesLoading());
      console.log(e);
    }
  };
};

export const loadUpcomingMovies = () => {
  return async (dispatch, getState) => {
    try {
      const upcomingMovies = selectNowPlayingMovies(getState());
      if (!upcomingMovies.data.length) {
        dispatch(showUpcomingMoviesLoading());
        const data = await ApiMovies.loadMovieList(ApiMovies.GET_UPCOMING, {
          page: 1,
        });
        dispatch(setUpcomingMovies(data.results.slice(0, 10)));
      }
    } catch (e) {
      dispatch(hideUpcomingMoviesLoading());
      console.log(e);
    }
  };
};
