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
