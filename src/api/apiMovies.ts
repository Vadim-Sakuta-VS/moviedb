import { requiredGetParams, SERVER, SERVER_IMAGE } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import {
  IGenre,
  IListResponse,
  ImgPathType,
  IMovie,
  ParamGetObj,
  URL_OBJ,
} from '../types/types';

interface IGenresResponse {
  genres: IGenre[];
}

export class ApiMovies {
  static GET: URL_OBJ = {
    NOW_PLAYING: `${SERVER}/movie/now_playing`,
    POPULAR: `${SERVER}/movie/popular`,
    TOP_RATED: `${SERVER}/movie/top_rated`,
    UPCOMING: `${SERVER}/movie/upcoming`,
    DISCOVER: `${SERVER}/discover/movie`,
  };

  static SORTING_TYPES = [
    { id: 'popularity.asc', name: 'Popularity (Asc)' },
    { id: 'popularity.desc', name: 'Popularity (Desc)' },
    { id: 'release_date.asc', name: 'Release date (Asc)' },
    { id: 'release_date.desc', name: 'Release date (Desc)' },
    { id: 'revenue.asc', name: 'Revenue (Asc)' },
    { id: 'revenue.desc', name: 'Revenue (Desc)' },
    { id: 'primary_release_date.asc', name: 'Primary release date (Asc)' },
    { id: 'primary_release_date.desc', name: 'Primary release date (Desc)' },
    { id: 'original_title.asc', name: 'Original title (Asc)' },
    { id: 'original_title.desc', name: 'Original title (Desc)' },
    { id: 'vote_average.asc', name: 'Vote average (Asc)' },
    { id: 'vote_average.desc', name: 'Vote average (Desc)' },
    { id: 'vote_count.asc', name: 'Vote count (Asc)' },
    { id: 'vote_count.desc', name: 'Vote count (Desc)' },
  ];

  static async loadGenres(): Promise<IGenresResponse> {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/genre/movie/list${paramsStr}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async loadMovieList(
    URL: string,
    paramsGETObj: ParamGetObj
  ): Promise<IListResponse<IMovie>> {
    try {
      const paramsStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramsGETObj,
      });
      const res = await fetch(`${URL}${paramsStr}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static getImage(path: ImgPathType) {
    return `${SERVER_IMAGE}${path}`;
  }

  static async loadMovieDetails(id: number): Promise<IMovie> {
    try {
      const paramsStr = stringifyGetParamsObj(requiredGetParams);
      const res = await fetch(`${SERVER}/movie/${id}${paramsStr}`);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async loadMovieReviews(id: number, paramsGETObj: ParamGetObj) {
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
