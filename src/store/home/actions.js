export const SHOW_GENRES_LOADING = 'HOME/SHOW_GENRES_LOADING';
export const HIDE_GENRES_LOADING = 'HOME/HIDE_GENRES_LOADING';
export const SET_GENRES = 'HOME/SET_GENRES';
export const SET_MOVIES_TYPE_LOADING = 'HOME/SET_MOVIES_TYPE_LOADING';
export const SET_MOVIES_DATA = 'HOME/SET_MOVIES_DATA';

export const showGenresLoading = () => ({
  type: SHOW_GENRES_LOADING,
});

export const hideGenresLoading = () => ({
  type: HIDE_GENRES_LOADING,
});

export const setGenres = (data) => ({
  type: SET_GENRES,
  payload: data,
});

export const setMovieTypeLoading = (type, isLoading) => ({
  type: SET_MOVIES_TYPE_LOADING,
  payload: {
    type,
    isLoading,
  },
});

export const setMoviesData = (type, data) => ({
  type: SET_MOVIES_DATA,
  payload: {
    type,
    data,
  },
});
