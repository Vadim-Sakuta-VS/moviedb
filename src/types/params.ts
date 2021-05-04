import { SelectOptionDif } from './uiTypes';

export type ParamGetObj = {
  [key: string]: string | ParamGetObj;
};

export interface IListResponse<T> {
  results: T[];
  total_pages: number;
}

export type KeyValueStringType = {
  [key: string]: string;
};

export type ParamObjType = {
  [key: string]: SelectOptionDif | string | ParamObjType;
};

export type ParamObjReturnType = {
  [key: string]: string | ParamObjReturnType;
};

export interface IUserParam {
  username: string;
  password: string;
}

export type TokenParam = {
  request_token: string;
};

export type SessionId = string;

export interface UserAuthResponse {
  success: boolean;
  status_message: string;
}

export type AuthCommonResponse = UserAuthResponse & { [key: string]: any };

export type UserAuthParam = TokenParam & IUserParam;
