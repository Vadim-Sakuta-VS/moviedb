import {
  ICustomListDetails,
  ICustomListDetailsLoading,
} from '../../types/entities';

export enum CustomListDetailsActions {
  SET_CUSTOM_LIST_DETAILS_DATA = 'CUSTOM_LIST_DETAILS/SET_CUSTOM_LIST_DETAILS_DATA',
  SET_CUSTOM_LIST_DETAILS_LOADING = 'CUSTOM_LIST_DETAILS/SET_CUSTOM_LIST_DETAILS_LOADING',
  SET_MANIPULATION_MOVIE_ID = 'CUSTOM_LIST_DETAILS/SET_MANIPULATION_MOVIE_ID',
  DELETE_MOVIE_CUSTOM_LIST = 'CUSTOM_LIST_DETAILS/DELETE_MOVIE_CUSTOM_LIST',
}

export enum CustomListDetailsTypesLoading {
  isDetailsLoading = 'isDetailsLoading',
  isClearListLoading = 'isClearListLoading',
  isRemoveMovieLoading = 'isRemoveMovieLoading',
}

export type SetCustomListDetailsDataAction = {
  type: CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_DATA;
  payload: ICustomListDetails;
};

export type SetCustomListDetailsLoadingAction = {
  type: CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_LOADING;
  payload: {
    type: keyof typeof CustomListDetailsTypesLoading;
    isLoading: boolean;
  };
};

export type SetManipulationMovieIdAction = {
  type: CustomListDetailsActions.SET_MANIPULATION_MOVIE_ID;
  payload: number;
};

export type DeleteMovieCustomListAction = {
  type: CustomListDetailsActions.DELETE_MOVIE_CUSTOM_LIST;
  payload: number;
};

export type CustomListDetailsAction =
  | SetCustomListDetailsDataAction
  | SetCustomListDetailsLoadingAction
  | SetManipulationMovieIdAction
  | DeleteMovieCustomListAction;

export type CustomListDetailsState = {
  data: ICustomListDetails;
  loading: ICustomListDetailsLoading;
  manipulation_movie_id: number;
};
