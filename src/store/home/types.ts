import { IMovie } from '../../types/entities';

export enum HomeActions {
  SET_MOVIES_TYPE_LOADING = 'HOME/SET_MOVIES_TYPE_LOADING',
  SET_MOVIES_DATA = 'HOME/SET_MOVIES_DATA',
}

export interface SetMoviesTypeLoadingAction {
  type: HomeActions.SET_MOVIES_TYPE_LOADING;
  payload: {
    type: string;
    isLoading: boolean;
  };
}

export interface SetMoviesDataAction {
  type: HomeActions.SET_MOVIES_DATA;
  payload: {
    type: string;
    data: IMovie[];
  };
}

export type HomeAction = SetMoviesTypeLoadingAction | SetMoviesDataAction;

export interface MoviesByType {
  data: IMovie[];
  isLoading: boolean;
}

export interface MoviesData {
  [type: string]: MoviesByType;
}

export interface HomeState {
  data: MoviesData;
}
