import { ApiMovies } from '../../api/apiMovies';
import { setMovieDetails, setTypeLoading } from './actionCreators';
import { MovieDetailsAction } from './types';
import { Dispatch } from 'redux';

export const loadMovieDetails = (id: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};
