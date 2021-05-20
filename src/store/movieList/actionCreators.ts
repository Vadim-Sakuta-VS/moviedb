import {
  MovieListActions,
  SetMoviesAction,
  SetMoviesTypeAction,
  SetMoviesTypeLoadingAction,
  SetTotalPagesAction,
  UpdateDataAction,
} from './types';
import { IMovie } from '../../types/entities';

export const setMoviesTypeLoading = (
  isLoading: boolean
): SetMoviesTypeLoadingAction => ({
  type: MovieListActions.SET_MOVIES_TYPE_LOADING,
  payload: isLoading,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: MovieListActions.SET_TOTAL_PAGES,
  payload: totalPages,
});

export const setMovies = (movies: IMovie[]): SetMoviesAction => ({
  type: MovieListActions.SET_MOVIES,
  payload: movies,
});

export const setMoviesType = (type: string): SetMoviesTypeAction => ({
  type: MovieListActions.SET_MOVIES_TYPE,
  payload: type,
});

export const updateData = ({
  movieType,
  isRequiredUpdate,
}: {
  movieType?: string;
  isRequiredUpdate?: boolean;
}): UpdateDataAction => ({
  type: MovieListActions.UPDATE_DATA,
  payload: {
    movieType,
    isRequiredUpdate,
  },
});
