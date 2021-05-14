import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import { ApiAuth } from './apiAuth';
import {
  AuthCommonResponse,
  IListResponse,
  ParamGetObj,
} from '../types/params';
import { ICustomList, IMovieAccountState } from '../types/entities';

export class ApiAccount {
  static POST = {
    favorite(account_id: number) {
      return `${SERVER}/account/${account_id}/favorite`;
    },
    watchlist(account_id: number) {
      return `${SERVER}/account/${account_id}/watchlist`;
    },
    createCustomList() {
      return `${SERVER}/list`;
    },
    addMovieCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}/add_item`;
    },
    removeMovieCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}/remove_item`;
    },
    clearCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}/clear`;
    },
  };
  static GET = {
    rated(account_id: number) {
      return `${SERVER}/account/${account_id}/rated/movies`;
    },
    favorite(account_id: number) {
      return `${SERVER}/account/${account_id}/favorite/movies`;
    },
    watchlist(account_id: number) {
      return `${SERVER}/account/${account_id}/watchlist/movies`;
    },
    getDetailsCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}`;
    },
    movieStatusCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}/item_status`;
    },
  };
  static DELETE = {
    deleteCustomList(list_id: number) {
      return `${SERVER}/list/${list_id}`;
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
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(
        `${SERVER}/movie/${movieId}/account_states${paramStr}`
      );
      return await res.json();
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
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(`${SERVER}/movie/${movieId}/rating${paramStr}`, {
        method: 'POST',
        body: JSON.stringify({ value }),
        headers: {
          'Content-type': 'application/json',
        },
      });
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async deleteRatingMovie(movieId: number): Promise<AuthCommonResponse> {
    try {
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(`${SERVER}/movie/${movieId}/rating${paramStr}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      return await res.json();
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
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(`${URL}${paramStr}`, {
        method: 'POST',
        body: JSON.stringify({
          media_type,
          media_id,
          [typeList]: valueList,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });
      return await res.json();
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
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
        page: String(page),
      });
      const res = await fetch(
        `${SERVER}/account/${account_id}/lists${paramStr}`
      );
      return await res.json();
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
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        ...paramGetObj,
        session_id: String(ApiAuth.getSessionId()),
      });

      let fetchOptions: RequestInit = {
        method,
        headers: {
          'Content-type': 'application/json',
        },
      };
      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      const res = await fetch(`${URL}${paramStr}`, fetchOptions);
      return await res.json();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
