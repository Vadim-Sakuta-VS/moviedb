import { RootState } from '../rootStore';
import { IGenre } from '../../types/entities';

export const selectGenresData = (state: RootState): IGenre[] =>
  state.genres.data;
