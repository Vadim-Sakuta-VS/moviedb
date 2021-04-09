export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const setMovieDetails = (movie) => ({
  type: SET_MOVIE_DETAILS,
  payload: movie,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
