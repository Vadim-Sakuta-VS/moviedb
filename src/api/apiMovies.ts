import { SERVER_IMAGE } from './constants';
import { IGenre, IMovie, IReview } from '../types/entities';
import { ISelectValue } from '../types/uiTypes';
import {
  IListResponse,
  KeyValueStringType,
  ParamGetObj,
} from '../types/params';
import { ImgPathType } from '../types/common';
import { http } from './restConfig';

interface IGenresResponse {
  genres: IGenre[];
}

enum MEDIA_TYPES {
  movie = 'movie',
  tv = 'tv',
}

export class ApiMovies {
  static GET: KeyValueStringType = {
    NOW_PLAYING: `/movie/now_playing`,
    POPULAR: `movie/popular`,
    TOP_RATED: `/movie/top_rated`,
    UPCOMING: `/movie/upcoming`,
    DISCOVER: `/discover/movie`,
  };

  static SORTING_TYPES: ISelectValue[] = [
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

  static media_types = MEDIA_TYPES;

  static async loadGenres(): Promise<IGenresResponse> {
    try {
      const res = await http.get('/genre/movie/list');
      return res.data;
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
      const res = await http.get(URL, {
        params: paramsGETObj,
      });
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static getImage(path: ImgPathType): string {
    return `${SERVER_IMAGE}${path}`;
  }

  static async loadMovieDetails(id: number): Promise<IMovie> {
    try {
      const res = await http.get(`/movie/${id}`);
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async loadMovieReviews(
    id: number,
    paramsGETObj: ParamGetObj
  ): Promise<IListResponse<IReview>> {
    try {
      const res = await http.get(`/movie/${id}/reviews`, {
        params: paramsGETObj,
      });
      return await res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
