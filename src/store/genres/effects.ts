import { setGenres, setTypeLoading } from './actionCreators';
import { ApiMovies } from '../../api/apiMovies';
import { selectGenresData } from './selectors';
import { Dispatch } from 'redux';
import { GenresAction } from './types';
import { GetRootState } from '../rootStore';

export const loadGenres = () => {
  return async (dispatch: Dispatch<GenresAction>, getState: GetRootState) => {
    try {
      const genres = selectGenresData(getState());
      if (!genres.length) {
        dispatch(setTypeLoading(true));
        const data = await ApiMovies.loadGenres();
        dispatch(setGenres(data.genres));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
