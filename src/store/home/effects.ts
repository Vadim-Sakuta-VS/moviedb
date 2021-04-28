import { setMoviesData, setMovieTypeLoading } from './actionCreators';
import { ApiMovies } from '../../api/apiMovies';
import { selectMoviesDataByType } from './selectors';
import { Dispatch } from 'redux';
import { HomeAction } from './types';
import { GetRootState } from '../rootStore';

export const loadMoviesData = (movieType: string) => {
  return async (dispatch: Dispatch<HomeAction>, getState: GetRootState) => {
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
    } finally {
      dispatch(setMovieTypeLoading(movieType, false));
    }
  };
};
