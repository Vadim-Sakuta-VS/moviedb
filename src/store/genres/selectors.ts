import { RootState } from '../rootStore';
import { IGenre } from '../../types/types';

export const selectGenresLoading = (state: RootState): boolean =>
  state.genres.isLoading;
export const selectGenresData = (state: RootState): IGenre[] =>
  state.genres.data;
