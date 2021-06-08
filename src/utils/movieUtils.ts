import { MOVIE_TYPES } from '../store/home/constants';

export function getMovieTypeTitle(key: string) {
  return MOVIE_TYPES[key.toUpperCase()];
}
