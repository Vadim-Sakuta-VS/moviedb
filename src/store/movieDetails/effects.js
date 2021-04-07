import { ApiMovies } from '../../api/apiMovies';
import { hideLoading, setMovieDetails, showLoading } from './actions';

export const loadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      dispatch(hideLoading());
      console.log(e);
    }
  };
};
