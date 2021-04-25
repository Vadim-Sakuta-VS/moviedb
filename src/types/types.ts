import { ValueType } from 'react-select';

export type ImgPathType = string | null;

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

export interface IReview {}

export interface ISelectOption {
  value: string | number;
  label: string | number;
}

export type SelectOptionDif = ISelectOption[] | ISelectOption;

export interface BaseSelectProps {
  label?: string;
  name: string;
  options: ValueType<ISelectOption, true> | ValueType<ISelectOption, false>;
}

export interface ISelectValue {
  id: number | string;
  name: number | string;
}

export type ParamGetObj = {
  [key: string]: any;
};

export interface IListResponse<T> {
  results: T[];
  total_pages: number;
}

export type URL_OBJ = {
  [key: string]: string;
};
