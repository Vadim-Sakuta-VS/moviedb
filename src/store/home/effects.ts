import { setMoviesData, setMovieTypeLoading } from './actionCreators';
import { ApiMovies } from '../../api/apiMovies';
import { selectMoviesDataByType } from './selectors';
import { Dispatch } from 'redux';
import { HomeAction } from './types';
import { GetRootState } from '../rootStore';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadMoviesData = (movieType: string) => {
  return async (
    dispatch: Dispatch<HomeAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      const { data } = selectMoviesDataByType(movieType)(getState());
      if (!data.length) {
        dispatch(setMovieTypeLoading(movieType, true));

        const data = await ApiMovies.loadMovieList(
          ApiMovies.GET[movieType.toUpperCase()],
          {
            page: '1',
          }
        );

        dispatch(setMoviesData(movieType, data.results.slice(0, 10)));
      }
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setMovieTypeLoading(movieType, false));
    }
  };
};
