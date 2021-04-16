import { setGenres, setGenresTypeLoading } from './actions';
import { ApiMovies } from '../../api/apiMovies';
import { selectGenresData } from './selectors';

export const loadGenres = () => {
  return async (dispatch, getState) => {
    try {
      const genres = selectGenresData(getState());
      if (!genres.length) {
        dispatch(setGenresTypeLoading(true));
        const data = await ApiMovies.loadGenres();
        dispatch(setGenres(data.genres));
      }
    } catch (e) {
      dispatch(setGenresTypeLoading(false));
      console.log(e);
    }
  };
};
