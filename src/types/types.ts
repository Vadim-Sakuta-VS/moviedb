import { ValueType } from 'react-select';

export type ImgPathType = string | null;
export type StringOrNumberType = string | number;

export interface ICompany {
  id: number;
  name: string;
  headquarters?: string;
  origin_country: string | null;
  description?: string;
  logo_path: ImgPathType;
  parent_company?: {
    name: string;
  } | null;
  homepage?: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface IMovie {
  id: number;
  poster_path: ImgPathType;
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  budget?: number;
  genres?: IGenre[];
  production_countries?: ICountry[];
  production_companies?: ICompany[];
  revenue?: number;
  runtime?: number;
  status?: string;
  tagline?: string;
  homepage?: string;
}

export interface IAuthorReview {
  username: string;
  avatar_path: ImgPathType;
  rating: number | null;
}

export interface IReview {
  id: string;
  author_details: IAuthorReview;
  created_at: string;
  updated_at: string;
  content: string;
}

export interface ISelectOption {
  value: string;
  label: StringOrNumberType;
}

export type SelectOptionDif = ISelectOption[] | ISelectOption;

export interface BaseSelectProps {
  label?: string;
  name: string;
  options: ValueType<ISelectOption, true> | ValueType<ISelectOption, false>;
}

export interface ISelectValue {
  id: StringOrNumberType;
  name: StringOrNumberType;
}

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
