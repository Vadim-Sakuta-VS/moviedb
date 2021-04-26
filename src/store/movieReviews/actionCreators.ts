import {
  ChangePageAction,
  MovieReviewsActions,
  SetMovieIdAction,
  SetMoviesReviewsAction,
  SetTotalPagesAction,
  SetTypeLoadingAction,
} from './types';
import { IReview } from '../../types/types';

export const setMovieId = (id: number): SetMovieIdAction => ({
  type: MovieReviewsActions.SET_MOVIE_ID,
  payload: id,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: MovieReviewsActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setMovieReviews = (
  reviews: IReview[]
): SetMoviesReviewsAction => ({
  type: MovieReviewsActions.SET_MOVIES_REVIEWS,
  payload: reviews,
});

export const changePage = (page: number): ChangePageAction => ({
  type: MovieReviewsActions.CHANGE_PAGE,
  payload: page,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: MovieReviewsActions.SET_TOTAL_PAGES,
  payload: totalPages,
});
