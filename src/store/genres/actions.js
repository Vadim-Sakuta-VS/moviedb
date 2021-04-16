export const SET_GENRES_TYPE_LOADING = 'GENRES/SET_GENRES_TYPE_LOADING';
export const SET_GENRES = 'GENRES/SET_GENRES';

export const setGenresTypeLoading = (isLoading) => ({
  type: SET_GENRES_TYPE_LOADING,
  payload: isLoading,
});

export const setGenres = (data) => ({
  type: SET_GENRES,
  payload: data,
});
