import {
  hideLoading,
  setMovieReviews,
  setTotalPages,
  showLoading,
} from './actions';
import { ApiMovies } from '../../api/apiMovies';

export const loadMovieReviews = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading());

      const movieId = getState().movieReviews.movieId;
      const currentPage = getState().movieReviews.currentPage;
      const data = await ApiMovies.loadMovieReviews(movieId, {
        page: currentPage,
      });

      dispatch(setMovieReviews(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      dispatch(hideLoading());
      console.log(e);
    }
  };
};
