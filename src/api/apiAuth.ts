import {
  AuthCommonResponse,
  IUserParam,
  SessionId,
  TokenParam,
  UserAuthParam,
  UserAuthResponse,
} from '../types/params';
import { IUser } from '../types/entities';
import { http } from './restConfig';

export class ApiAuth {
  static async loginUser(user: IUserParam): Promise<UserAuthResponse> {
    try {
      const getAuthObj = (obj: AuthCommonResponse): UserAuthResponse => {
        const keys = ['success', 'status_message'];
        return keys.reduce((acc, key) => {
          return { ...acc, [key]: obj[key] };
        }, {} as UserAuthResponse);
      };

      const requestTokenData = await ApiAuth.createRequestToken();

      if (requestTokenData.success) {
        const loginObj = await ApiAuth.createSessionWithLogin({
          ...user,
          request_token: requestTokenData.request_token,
        });

        if (loginObj.success) {
          const sessionObj = await ApiAuth.createSession({
            request_token: loginObj.request_token,
          });

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

  private static async createRequestToken(): Promise<AuthCommonResponse> {
    const res = await http.get('/authentication/token/new');
    return res.data;
  }

  private static async createSessionWithLogin(
    userData: UserAuthParam
  ): Promise<AuthCommonResponse> {
    const res = await http.post(
      '/authentication/token/validate_with_login',
      userData
    );
    return await res.data;
  }

  private static async createSession(
    token: TokenParam
  ): Promise<AuthCommonResponse> {
    const res = await http.post(`/authentication/session/new`, token);
    return await res.data;
  }

  static async logoutUser() {
    try {
      const sessionObj = await ApiAuth.deleteSession();
      if (sessionObj.success) {
        ApiAuth.deleteSessionId();
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private static async deleteSession(): Promise<AuthCommonResponse> {
    const res = await http.delete('/authentication/session', {
      data: { session_id: ApiAuth.getSessionId() },
    });
    return res.data;
  }

  static async getAccountDetails(): Promise<IUser | null> {
    try {
      const session_id = ApiAuth.getSessionId();
      if (session_id) {
        const res = await http.get('/account', { params: { session_id } });
        return await res.data;
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

  static getSessionId() {
    return localStorage.getItem('session_id');
  }

  private static deleteSessionId() {
    localStorage.removeItem('session_id');
  }
}
