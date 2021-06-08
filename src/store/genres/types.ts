import { IGenre } from '../../types/entities';

export enum GenresActions {
  SET_GENRES = 'GENRES/SET_GENRES',
}

export interface SetGenresAction {
  type: GenresActions.SET_GENRES;
  payload: IGenre[];
}

export type GenresAction = SetGenresAction;

export interface GenresState {
  data: IGenre[];
}
