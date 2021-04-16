export const SET_MOVIES_TYPE_LOADING = 'HOME/SET_MOVIES_TYPE_LOADING';
export const SET_MOVIES_DATA = 'HOME/SET_MOVIES_DATA';

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
