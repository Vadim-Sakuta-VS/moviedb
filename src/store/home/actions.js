export const SHOW_GENRES_LOADING = 'HOME/SHOW_GENRES_LOADING';
export const HIDE_GENRES_LOADING = 'HOME/HIDE_GENRES_LOADING';
export const SET_GENRES = 'HOME/SET_GENRES';
export const SHOW_NOW_PLAYING_MOVIES_LOADING =
  'HOME/SHOW_NOW_PLAYING_MOVIES_LOADING';
export const HIDE_NOW_PLAYING_MOVIES_LOADING =
  'HOME/HIDE_NOW_PLAYING_MOVIES_LOADING';
export const SET_NOW_PLAYING_MOVIES = 'HOME/SET_NOW_PLAYING_MOVIES';
export const SHOW_POPULAR_MOVIES_LOADING = 'HOME/SHOW_POPULAR_MOVIES_LOADING';
export const HIDE_POPULAR_MOVIES_LOADING = 'HOME/HIDE_POPULAR_MOVIES_LOADING';
export const SET_POPULAR_MOVIES = 'HOME/SET_POPULAR_MOVIES';
export const SHOW_TOP_RATED_MOVIES_LOADING =
  'HOME/SHOW_TOP_RATED_MOVIES_LOADING';
export const HIDE_TOP_RATED_MOVIES_LOADING =
  'HOME/HIDE_TOP_RATED_MOVIES_LOADING';
export const SET_TOP_RATED_MOVIES = 'HOME/SET_TOP_RATED_MOVIES';
export const SHOW_UPCOMING_MOVIES_LOADING = 'HOME/SHOW_UPCOMING_MOVIES_LOADING';
export const HIDE_UPCOMING_MOVIES_LOADING = 'HOME/HIDE_UPCOMING_MOVIES_LOADING';
export const SET_UPCOMING_MOVIES = 'HOME/SET_UPCOMING_MOVIES';

export const showGenresLoading = () => ({
  type: SHOW_GENRES_LOADING,
});

export const hideGenresLoading = () => ({
  type: HIDE_GENRES_LOADING,
});

export const showNowPlayingMoviesLoading = () => ({
  type: SHOW_NOW_PLAYING_MOVIES_LOADING,
});

export const hideNowPlayingMoviesLoading = () => ({
  type: HIDE_NOW_PLAYING_MOVIES_LOADING,
});

export const showPopularMoviesLoading = () => ({
  type: SHOW_POPULAR_MOVIES_LOADING,
});

export const hidePopularMoviesLoading = () => ({
  type: HIDE_POPULAR_MOVIES_LOADING,
});

export const showTopRatedMoviesLoading = () => ({
  type: SHOW_TOP_RATED_MOVIES_LOADING,
});

export const hideTopRatedMoviesLoading = () => ({
  type: HIDE_TOP_RATED_MOVIES_LOADING,
});

export const showUpcomingMoviesLoading = () => ({
  type: SHOW_UPCOMING_MOVIES_LOADING,
});

export const hideUpcomingMoviesLoading = () => ({
  type: HIDE_UPCOMING_MOVIES_LOADING,
});

export const setGenres = (data) => ({
  type: SET_GENRES,
  payload: data,
});

export const setNowPlayingMovies = (data) => ({
  type: SET_NOW_PLAYING_MOVIES,
  payload: data,
});

export const setPopularMovies = (data) => ({
  type: SET_POPULAR_MOVIES,
  payload: data,
});

export const setTopRatedMovies = (data) => ({
  type: SET_TOP_RATED_MOVIES,
  payload: data,
});

export const setUpcomingMovies = (data) => ({
  type: SET_UPCOMING_MOVIES,
  payload: data,
});
