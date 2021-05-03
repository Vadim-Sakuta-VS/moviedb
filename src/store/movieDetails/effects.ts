import { ApiMovies } from '../../api/apiMovies';
import {
  setMovieAccountState,
  setMovieDetails,
  setMovieRating,
  setTypeLoading,
} from './actionCreators';
import { MovieDetailsAction } from './types';
import { Dispatch } from 'redux';
import { ApiAccount } from '../../api/apiAccount';
import { initialMovieAccountState } from './reducers';

export const loadMovieDetails = (id: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const rateMovie = (movieId: number, value: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      const ratingRes = await ApiAccount.rateMovie(movieId, value);
      if (ratingRes.status_code === 1 || ratingRes.status_code === 12) {
        dispatch(setMovieRating(value));
        return;
      }
      dispatch(setMovieRating(0));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteRatingMovie = (movieId: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      const ratingRes = await ApiAccount.deleteRatingMovie(movieId);
      if (ratingRes.status_code === 13) {
        dispatch(setMovieRating(0));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const loadMovieAccountState = (movieId: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      const accountState = await ApiAccount.loadMovieAccountState(movieId);
      dispatch(
        setMovieAccountState(
          accountState.id ? accountState : initialMovieAccountState
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
};
