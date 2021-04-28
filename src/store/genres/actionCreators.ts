import { GenresActions, SetGenresAction, SetTypeLoadingAction } from './types';
import { IGenre } from '../../types/entities';

export const setTypeLoading = (isLoading: boolean): SetTypeLoadingAction => ({
  type: GenresActions.SET_TYPE_LOADING,
  payload: isLoading,
});

export const setGenres = (data: IGenre[]): SetGenresAction => ({
  type: GenresActions.SET_GENRES,
  payload: data,
});
