import { ICustomListDetails } from '../../types/entities';
import {
  ClearCustomListDetailsAction,
  CustomListDetailsActions,
  CustomListDetailsTypesLoading,
  DeleteMovieCustomListAction,
  SetCustomListDetailsDataAction,
  SetCustomListDetailsLoadingAction,
  SetManipulationMovieIdAction,
} from './types';

export const setCustomListDetailsData = (
  data: ICustomListDetails
): SetCustomListDetailsDataAction => ({
  type: CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_DATA,
  payload: data,
});

export const setCustomListDetailsLoading = (
  type: keyof typeof CustomListDetailsTypesLoading,
  isLoading: boolean
): SetCustomListDetailsLoadingAction => ({
  type: CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_LOADING,
  payload: { type, isLoading },
});

export const setManipulationMovieId = (
  movie_id: number
): SetManipulationMovieIdAction => ({
  type: CustomListDetailsActions.SET_MANIPULATION_MOVIE_ID,
  payload: movie_id,
});

export const deleteMovieCustomList = (
  movie_id: number
): DeleteMovieCustomListAction => ({
  type: CustomListDetailsActions.DELETE_MOVIE_CUSTOM_LIST,
  payload: movie_id,
});

export const clearCustomListDetails = (): ClearCustomListDetailsAction => ({
  type: CustomListDetailsActions.CLEAR_CUSTOM_LIST_DETAILS,
});
