import {
  HomeActions,
  SetMoviesDataAction,
  SetMoviesTypeLoadingAction,
} from './types';
import { IMovie } from '../../types/types';

export const setMovieTypeLoading = (
  type: string,
  isLoading: boolean
): SetMoviesTypeLoadingAction => ({
  type: HomeActions.SET_MOVIES_TYPE_LOADING,
  payload: {
    type,
    isLoading,
  },
});

export const setMoviesData = (
  type: string,
  data: IMovie[]
): SetMoviesDataAction => ({
  type: HomeActions.SET_MOVIES_DATA,
  payload: {
    type,
    data,
  },
});
