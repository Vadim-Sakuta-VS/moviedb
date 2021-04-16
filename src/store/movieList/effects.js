import { ApiMovies } from '../../api/apiMovies';
import { setMovies, setTotalPages } from './actions';
import { selectCurrentPage } from './selectors';

export const loadMovies = (movieType) => {
  return async (dispatch, getState) => {
    try {
      const currentPage = selectCurrentPage(getState());

      const data = await ApiMovies.loadMovieList(
        ApiMovies.GET[movieType.toUpperCase()],
        {
          page: currentPage,
        }
      );

      if (!data) {
        throw new Error('Missed data');
      }

      dispatch(setMovies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    }
  };
};
