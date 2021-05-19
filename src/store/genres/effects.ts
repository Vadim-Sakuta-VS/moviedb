import { setGenres, setTypeLoading } from './actionCreators';
import { ApiMovies } from '../../api/apiMovies';
import { selectGenresData } from './selectors';
import { Dispatch } from 'redux';
import { GenresAction } from './types';
import { GetRootState } from '../rootStore';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadGenres = () => {
  return async (
    dispatch: Dispatch<GenresAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      const genres = selectGenresData(getState());
      if (!genres.length) {
        dispatch(setTypeLoading(true));
        const data = await ApiMovies.loadGenres();
        dispatch(setGenres(data.genres));
      }
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
