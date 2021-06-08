import { GenresActions, SetGenresAction } from './types';
import { IGenre } from '../../types/entities';

export const setGenres = (data: IGenre[]): SetGenresAction => ({
  type: GenresActions.SET_GENRES,
  payload: data,
});
