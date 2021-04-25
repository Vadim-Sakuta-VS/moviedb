import { RootState } from '../rootStore';
import { MoviesByType, MoviesData } from './types';

export const selectMoviesDataByType = (type: string) => (
  state: RootState
): MoviesByType => state.home.data[type];
export const selectMoviesData = (state: RootState): MoviesData =>
  state.home.data;
