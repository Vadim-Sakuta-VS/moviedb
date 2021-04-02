import { ApiMovies } from '../../api/apiMovies';
import { setPopularMovies, setTotalPages } from './actions';

export const loadPopularMovies = () => {
  return async (dispatch, getState) => {
    try {
      const currentPage = getState().movieList.currentPage;
      const data = await ApiMovies.loadPopularMovieList(currentPage);
      if (!data) {
        throw new Error('Missed data');
      }

      dispatch(setPopularMovies(data.results));
      dispatch(setTotalPages(data.total_pages));
    } catch (e) {
      console.log(e);
    }
  };
};
