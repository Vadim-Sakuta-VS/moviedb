import { ImgPathType } from './common';

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

export interface IMovieAccountState {
  id: number;
  favorite: boolean;
  rated:
    | {
        value: number;
      }
    | boolean;
  watchlist: boolean;
}

export interface IMovieBasicListLoading {
  favorite: boolean;
  watchlist: boolean;
}

export interface IMovieCustomListsLoading {
  isLoadingStatus: boolean;
  isSubmitLoading: boolean;
}

export interface ICustomListDetailsLoading {
  isDetailsLoading: boolean;
  isClearListLoading: boolean;
  isRemoveMovieLoading: boolean;
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

export interface IUser {
  id: number;
  avatar: {
    tmdb: {
      avatar_path: ImgPathType;
    };
  };
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
}

export type ICustomList = {
  id: number;
  name: string;
  description: string;
  item_count: number;
  favorite_count: number;
};

export interface ICustomListDetails extends ICustomList {
  items: IMovie[];
}
