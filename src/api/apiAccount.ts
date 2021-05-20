import { ApiAuth } from './apiAuth';
import {
  AuthCommonResponse,
  IListResponse,
  ParamGetObj,
} from '../types/params';
import { ICustomList, IMovieAccountState } from '../types/entities';
import { http } from './restConfig';
import { AxiosRequestConfig } from 'axios';

export class ApiAccount {
  static POST = {
    favorite(account_id: number) {
      return `/account/${account_id}/favorite`;
    },
    watchlist(account_id: number) {
      return `/account/${account_id}/watchlist`;
    },
    createCustomList() {
      return `/list`;
    },
    addMovieCustomList(list_id: number) {
      return `/list/${list_id}/add_item`;
    },
    removeMovieCustomList(list_id: number) {
      return `/list/${list_id}/remove_item`;
    },
    clearCustomList(list_id: number) {
      return `/list/${list_id}/clear`;
    },
  };
  static GET = {
    rated(account_id: number) {
      return `/account/${account_id}/rated/movies`;
    },
    favorite(account_id: number) {
      return `/account/${account_id}/favorite/movies`;
    },
    watchlist(account_id: number) {
      return `/account/${account_id}/watchlist/movies`;
    },
    getDetailsCustomList(list_id: number) {
      return `/list/${list_id}`;
    },
    movieStatusCustomList(list_id: number) {
      return `/list/${list_id}/item_status`;
    },
  };
  static DELETE = {
    deleteCustomList(list_id: number) {
      return `/list/${list_id}`;
    },
  };
  static ManipulationCustomListTypes = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
  } as const;

  static async loadMovieAccountState(
    movieId: number
  ): Promise<IMovieAccountState> {
    try {
      const res = await http.get(`/movie/${movieId}/account_states`, {
        params: { session_id: ApiAuth.getSessionId() },
      });
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async rateMovie(
    movieId: number,
    value: number
  ): Promise<AuthCommonResponse> {
    try {
      const res = await http.post(
        `/movie/${movieId}/rating`,
        { value },
        { params: { session_id: ApiAuth.getSessionId() } }
      );
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async deleteRatingMovie(movieId: number): Promise<AuthCommonResponse> {
    try {
      const res = await http.delete(`/movie/${movieId}/rating`, {
        params: { session_id: ApiAuth.getSessionId() },
      });
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async addMediaToBasicList(
    URL: string,
    media_type: string,
    media_id: number,
    typeList: string,
    valueList: boolean
  ): Promise<AuthCommonResponse> {
    try {
      const res = await http.post(
        URL,
        {
          media_type,
          media_id,
          [typeList]: valueList,
        },
        { params: { session_id: ApiAuth.getSessionId() } }
      );
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async loadCustomLists(
    account_id: number,
    page: number
  ): Promise<IListResponse<ICustomList>> {
    try {
      const res = await http.get(`/account/${account_id}/lists`, {
        params: { session_id: ApiAuth.getSessionId(), page },
      });
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async manipulateCustomList(
    URL: string,
    method: typeof ApiAccount.ManipulationCustomListTypes[keyof typeof ApiAccount.ManipulationCustomListTypes],
    body?: object | null,
    paramGetObj?: ParamGetObj
  ): Promise<AuthCommonResponse> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url: URL,
        params: { ...paramGetObj, session_id: ApiAuth.getSessionId() },
      };

      if (body) {
        config.data = body;
      }

      const res = await http(config);
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
