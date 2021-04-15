export const selectGenres = (state) => state.home.genres;
export const selectMoviesDataByType = (type) => (state) =>
  state.home.data[type];
export const selectMoviesData = (state) => state.home.data;
