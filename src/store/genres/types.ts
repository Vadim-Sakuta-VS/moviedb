import { IGenre } from '../../types/entities';

export enum GenresActions {
  SET_TYPE_LOADING = 'GENRES/SET_TYPE_LOADING',
  SET_GENRES = 'GENRES/SET_GENRES',
}

export interface SetTypeLoadingAction {
  type: GenresActions.SET_TYPE_LOADING;
  payload: boolean;
}

export interface SetGenresAction {
  type: GenresActions.SET_GENRES;
  payload: IGenre[];
}

export type GenresAction = SetTypeLoadingAction | SetGenresAction;

export interface GenresState {
  data: IGenre[];
  isLoading: boolean;
}
