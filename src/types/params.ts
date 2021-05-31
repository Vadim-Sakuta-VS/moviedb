import { SelectOptionDif } from './uiTypes';
import { ICustomList, IVideo } from './entities';

export type ParamGetObj = {
  [key: string]: string | ParamGetObj;
};

export interface IListResponse<T> {
  page: number;
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
  status_code?: number;
  errors?: string[];
  item_present?: boolean;
}

export type AuthCommonResponse = UserAuthResponse & { [key: string]: any };

export type UserAuthParam = TokenParam & IUserParam;

export type CustomListParam = Pick<ICustomList, 'name' | 'description'>;

export type MovieCustomListDeleteOptionsType = {
  isDeletingLoading: boolean;
  manipulationMovieId: number;
  onDeleteMovie: (movie_id: number) => void;
};

export type IVideoResponse = {
  id: number;
  results: IVideo[];
};
