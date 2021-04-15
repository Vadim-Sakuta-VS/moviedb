import { ApiMovies } from '../../api/apiMovies';
import { setMovies, setTotalPages } from './actions';
import { selectCurrentPage } from './selectors';
import { MOVIE_TYPES } from '../home/reducers';

export const loadMovies = (movieType) => {
  return async (dispatch, getState) => {
    try {
      const currentPage = selectCurrentPage(getState());

      const objMovieURL = Object.keys(MOVIE_TYPES).reduce((acc, key) => {
        return { ...acc, [MOVIE_TYPES[key]]: ApiMovies.GET[key] };
      }, {});

      const data = await ApiMovies.loadMovieList(objMovieURL[movieType], {
        page: currentPage,
      });
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
