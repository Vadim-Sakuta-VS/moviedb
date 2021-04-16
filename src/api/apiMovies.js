import { requiredGetParams, SERVER, SERVER_IMAGE } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import { MOVIE_TYPES } from '../store/home/reducers';

export class ApiMovies {
  static GET = {
    NOW_PLAYING: `${SERVER}/movie/now_playing`,
    POPULAR: `${SERVER}/movie/popular`,
    TOP_RATED: `${SERVER}/movie/top_rated`,
    UPCOMING: `${SERVER}/movie/upcoming`,
  };

  static getMovieURLByType(type) {
    const objMovieURL = Object.keys(MOVIE_TYPES).reduce((acc, key) => {
      return { ...acc, [key]: ApiMovies.GET[key] };
    }, {});
    return objMovieURL[type.toUpperCase()];
  }

  static async loadGenres() {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/genre/movie/list${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadMovieList(URL, paramsGETObj) {
    try {
      const paramsStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramsGETObj,
      });
      const res = await fetch(`${URL}${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static getImage(path) {
    return `${SERVER_IMAGE}${path}`;
  }

  static async loadMovieDetails(id) {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/movie/${id}${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  static async loadMovieReviews(id, paramsGETObj) {
    try {
      const paramsStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramsGETObj,
      });
      const res = await fetch(`${SERVER}/movie/${id}/reviews${paramsStr}`);
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
