import {
  ChangePageAction,
  MovieListActions,
  SetMoviesAction,
  SetMoviesTypeAction,
  SetMoviesTypeLoadingAction,
  SetTotalPagesAction,
  UpdateDataAction,
} from './types';
import { IMovie } from '../../types/types';

export const setMoviesTypeLoading = (
  isLoading: boolean
): SetMoviesTypeLoadingAction => ({
  type: MovieListActions.SET_MOVIES_TYPE_LOADING,
  payload: isLoading,
});

export const changePage = (page: number): ChangePageAction => ({
  type: MovieListActions.CHANGE_PAGE,
  payload: page,
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
