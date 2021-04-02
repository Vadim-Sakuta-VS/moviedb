import { ApiMovies } from '../../api/apiMovies';
import { setMovieDetails } from './actions';

export const loadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data) {
        throw new Error('Missed data');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      console.log(e);
    }
  };
};
