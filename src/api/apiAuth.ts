import { stringifyGetParamsObj } from '../utils/utils';
import { requiredGetParams, SERVER } from './constants';
import {
  AuthCommonResponse,
  IUserParam,
  SessionId,
  TokenParam,
  UserAuthParam,
  UserAuthResponse,
} from '../types/params';
import { IUser } from '../types/entities';

export class ApiAuth {
  static async loginUser(user: IUserParam): Promise<UserAuthResponse> {
    try {
      const getAuthObj = (obj: AuthCommonResponse): UserAuthResponse => {
        const keys = ['success', 'status_message'];
        return keys.reduce((acc, key) => {
          return { ...acc, [key]: obj[key] };
        }, {} as UserAuthResponse);
      };

      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
      });
      const requestTokenData = await ApiAuth.createRequestToken(paramStr);

      if (requestTokenData.success) {
        const loginObj = await ApiAuth.createSessionWithLogin(
          {
            ...user,
            request_token: requestTokenData.request_token,
          },
          paramStr
        );

        if (loginObj.success) {
          const sessionObj = await ApiAuth.createSession(
            {
              request_token: loginObj.request_token,
            },
            paramStr
          );

          if (sessionObj.success) {
            ApiAuth.saveSessionId(sessionObj.session_id);
            return getAuthObj(sessionObj);
          }
        }

        return getAuthObj({ ...loginObj, success: false });
      }

      return getAuthObj({ ...requestTokenData, success: false });
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private static async createRequestToken(
    paramStr: string
  ): Promise<AuthCommonResponse> {
    const res = await fetch(`${SERVER}/authentication/token/new${paramStr}`);
    return await res.json();
  }

  private static async createSessionWithLogin(
    userData: UserAuthParam,
    paramStr: string
  ): Promise<AuthCommonResponse> {
    const res = await fetch(
      `${SERVER}/authentication/token/validate_with_login${paramStr}`,
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    return await res.json();
  }

  private static async createSession(
    token: TokenParam,
    paramStr: string
  ): Promise<AuthCommonResponse> {
    const res = await fetch(`${SERVER}/authentication/session/new${paramStr}`, {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }

  static async logoutUser() {
    try {
      const paramStr = stringifyGetParamsObj({
        ...requiredGetParams,
      });

      const sessionObj = await ApiAuth.deleteSession(paramStr);
      if (sessionObj.success) {
        ApiAuth.deleteSessionId();
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private static async deleteSession(
    paramStr: string
  ): Promise<AuthCommonResponse> {
    const res = await fetch(`${SERVER}/authentication/session${paramStr}`, {
      method: 'DELETE',
      body: JSON.stringify({
        session_id: ApiAuth.getSessionId(),
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }

  static async getAccountDetails(): Promise<IUser | null> {
    try {
      const session_id = ApiAuth.getSessionId();
      if (session_id) {
        const paramStr = stringifyGetParamsObj({
          ...requiredGetParams,
          session_id,
        });
        const res = await fetch(`${SERVER}/account${paramStr}`);
        return await res.json();
      }
      return null;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private static saveSessionId(id: SessionId) {
    localStorage.setItem('session_id', id);
  }

  private static getSessionId() {
    return localStorage.getItem('session_id');
  }

  private static deleteSessionId() {
    localStorage.removeItem('session_id');
  }
}
