export const TOGGLE_GENRE = 'TOGGLE_GENRE';

export const toggleGenre = (id) => ({
  type: TOGGLE_GENRE,
  payload: id,
});
