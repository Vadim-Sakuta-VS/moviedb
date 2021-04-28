import { MOVIE_TYPES } from '../store/home/reducers';

export function getMovieTypeTitle(key: string) {
  return MOVIE_TYPES[key.toUpperCase()];
}
