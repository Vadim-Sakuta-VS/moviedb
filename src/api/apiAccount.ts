import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import { ApiAuth } from './apiAuth';
import {
  AuthCommonResponse,
  CustomListParam,
  IListResponse,
} from '../types/params';
import { ICustomList, IMovieAccountState } from '../types/entities';

interface AddCustomListResponse extends AuthCommonResponse {
  list_id?: number;
}

export class ApiAccount {
  static POST = {
    favorite(account_id: number) {
      return `${SERVER}/account/${account_id}/favorite`;
    },
    watchlist(account_id: number) {
      return `${SERVER}/account/${account_id}/watchlist`;
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
  };
  static ManipulationCustomListTypes = {
    GET_DETAILS: 'GET',
    DELETE_LIST: 'DELETE',
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

  static async addCustomList(
    list: CustomListParam
  ): Promise<AddCustomListResponse> {
    try {
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(`${SERVER}/list${paramStr}`, {
        method: 'POST',
        body: JSON.stringify(list),
        headers: {
          'Content-type': 'application/json',
        },
      });
      return res.json();
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
    method: typeof ApiAccount.ManipulationCustomListTypes[keyof typeof ApiAccount.ManipulationCustomListTypes],
    list_id: number
  ): Promise<AuthCommonResponse> {
    try {
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
        session_id: String(ApiAuth.getSessionId()),
      });
      const res = await fetch(`${SERVER}/list/${list_id}${paramStr}`, {
        method,
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
}
