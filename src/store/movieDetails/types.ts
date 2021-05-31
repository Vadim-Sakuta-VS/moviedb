import {
  ICustomList,
  IMovie,
  IMovieAccountState,
  IMovieBasicListLoading,
  IMovieCustomListsLoading,
  IVideo,
} from '../../types/entities';
import { MovieTypesCustomListsLoadingState } from './reducers';

export enum MovieDetailsActions {
  SET_MOVIE_DETAILS = 'MOVIE_DETAILS/SET_MOVIE_DETAILS',
  SET_TYPE_LOADING = 'MOVIE_DETAILS/SET_TYPE_LOADING',
  SET_MOVIE_RATING = 'MOVIE_DETAILS/SET_MOVIE_RATING',
  SET_MOVIE_TO_BASIC_LIST = 'MOVIE_DETAILS/SET_MOVIE_TO_BASIC_LIST',
  SET_MOVIE_TO_BASIC_LIST_LOADING = 'MOVIE_DETAILS/SET_MOVIE_TO_BASIC_LIST_LOADING',
  SET_MOVIE_ACCOUNT_STATE = 'MOVIE_DETAILS/SET_MOVIE_ACCOUNT_STATE',
  SET_MOVIE_ACCOUNT_STATE_LOADING = 'MOVIE_DETAILS/SET_MOVIE_ACCOUNT_STATE_LOADING',
  SET_MOVIE_CUSTOM_LISTS_DATA = 'MOVIE_DETAILS/SET_MOVIE_CUSTOM_LISTS_DATA',
  SET_MOVIE_CUSTOM_LISTS_LOADING = 'MOVIE_DETAILS/SET_MOVIE_CUSTOM_LISTS_LOADING',
  ADD_MOVIE_CUSTOM_LISTS = 'MOVIE_DETAILS/ADD_MOVIE_CUSTOM_LISTS',
  SET_MOVIE_VIDEO = 'MOVIE_DETAILS/SET_MOVIE_VIDEO',
}

export interface SetMovieDetailsAction {
  type: MovieDetailsActions.SET_MOVIE_DETAILS;
  payload: IMovie;
}

export interface SetTypeLoadingAction {
  type: MovieDetailsActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface SetMovieRatingAction {
  type: MovieDetailsActions.SET_MOVIE_RATING;
  payload: number;
}

export interface SetMovieAccountStateAction {
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE;
  payload: IMovieAccountState;
}

export interface SetMovieAccountStateLoadingAction {
  type: MovieDetailsActions.SET_MOVIE_ACCOUNT_STATE_LOADING;
  payload: boolean;
}

export interface SetMovieToBasicListAction {
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST;
  payload: { type: string; value: boolean };
}

export interface SetMovieToBasicListLoadingAction {
  type: MovieDetailsActions.SET_MOVIE_TO_BASIC_LIST_LOADING;
  payload: { type: string; isLoading: boolean };
}

export type SetMovieCustomListsDataAction = {
  type: MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_DATA;
  payload: ICustomList[];
};

export type SetMovieCustomListsLoadingAction = {
  type: MovieDetailsActions.SET_MOVIE_CUSTOM_LISTS_LOADING;
  payload: {
    type: keyof typeof MovieTypesCustomListsLoadingState;
    isLoading: boolean;
  };
};

export type AddMovieCustomListsAction = {
  type: MovieDetailsActions.ADD_MOVIE_CUSTOM_LISTS;
  payload: number[];
};

export type SetMovieVideoAction = {
  type: MovieDetailsActions.SET_MOVIE_VIDEO;
  payload: IVideo;
};

export type MovieDetailsAction =
  | SetMovieDetailsAction
  | SetTypeLoadingAction
  | SetMovieRatingAction
  | SetMovieAccountStateAction
  | SetMovieAccountStateLoadingAction
  | SetMovieToBasicListAction
  | SetMovieToBasicListLoadingAction
  | SetMovieCustomListsDataAction
  | SetMovieCustomListsLoadingAction
  | AddMovieCustomListsAction
  | SetMovieVideoAction;

export interface MovieDetailsState {
  isLoading: boolean;
  movie: IMovie;
  movieListsAccountState: {
    data: IMovieAccountState;
    isLoading: boolean;
    stateListsLoading: IMovieBasicListLoading;
  };
  custom_lists: {
    data: ICustomList[];
    loading: IMovieCustomListsLoading;
  };
  video: IVideo;
}
