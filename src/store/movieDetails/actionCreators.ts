import {
  AddMovieCustomListsAction,
  MovieDetailsAction,
  MovieDetailsActions,
  SetMovieAccountStateAction,
  SetMovieAccountStateLoadingAction,
  SetMovieCustomListsDataAction,
  SetMovieCustomListsLoadingAction,
  SetMovieRatingAction,
  SetMovieToBasicListAction,
  SetMovieToBasicListLoadingAction,
  SetTypeLoadingAction,
} from './types';
import { ICustomList, IMovie, IMovieAccountState } from '../../types/entities';
import { MovieTypesCustomListsLoadingState } from './reducers';

export const setMovieDetails = (movie: IMovie): MovieDetailsAction => ({
  type: MovieDetailsActions.SET_MOVIE_DETAILS,
  payload: movie,
});

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: MovieDetailsActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setMovieRating = (value: number): SetMovieRatingAction => ({
  type: MovieDetailsActions.SET_MOVIE_RATING,
  payload: value,
});

export const setMovieAccountState = (
  movieAccountState: IMovieAccountState
): SetMovieAccountStateAction => ({
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE,
  payload: movieAccountState,
});

export const setMovieAccountStateLoading = (
  isLoading: boolean
): SetMovieAccountStateLoadingAction => ({
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE_LOADING,
  payload: isLoading,
});

export const setMovieToBasicList = (
  type: string,
  value: boolean
): SetMovieToBasicListAction => ({
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST,
  payload: { type, value },
});

export const setMovieToBasicListLoading = (
  type: string,
  isLoading: boolean
): SetMovieToBasicListLoadingAction => ({
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING,
  payload: { type, isLoading },
});

export const setMovieCustomListsData = (
  customLists: ICustomList[]
): SetMovieCustomListsDataAction => ({
  type: MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_DATA,
  payload: customLists,
});

export const setMovieCustomListsLoading = (
  type: keyof typeof MovieTypesCustomListsLoadingState,
  isLoading: boolean
): SetMovieCustomListsLoadingAction => ({
  type: MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_LOADING,
  payload: { type, isLoading },
});

export const addMovieCustomLists = (
  customListsIds: number[]
): AddMovieCustomListsAction => ({
  type: MovieDetailsActions.ADD_MOVIE_CUSTOM_LISTS,
  payload: customListsIds,
});
