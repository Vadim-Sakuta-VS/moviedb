import {
  setMovieReviews,
  setTotalPages,
  setTypeLoading,
} from './actionCreators';
import { ApiMovies } from '../../api/apiMovies';
import { Dispatch } from 'redux';
import { MovieReviewsAction } from './types';
import { GetRootState } from '../rootStore';
import { selectMovieId, selectMovieReviewsCurrentPage } from './selectors';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadMovieReviews = () => {
  return async (
    dispatch: Dispatch<MovieReviewsAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setTypeLoading(true));

      const movieId = selectMovieId(getState());
      const currentPage = selectMovieReviewsCurrentPage(getState());
      const data = await ApiMovies.loadMovieReviews(movieId as number, {
        page: currentPage.toString(),
      });

      dispatch(setMovieReviews(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
