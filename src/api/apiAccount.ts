import { requiredGetParams, SERVER } from './constants';
import { stringifyGetParamsObj } from '../utils/utils';
import { ApiAuth } from './apiAuth';
import { AuthCommonResponse } from '../types/params';
import { IMovieAccountState } from '../types/entities';

export class ApiAccount {
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
}
