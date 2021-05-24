import { ApiMovies } from '../../api/apiMovies';
import {
  addMovieCustomLists,
  setMovieAccountState,
  setMovieAccountStateLoading,
  setMovieCustomListsData,
  setMovieCustomListsLoading,
  setMovieDetails,
  setMovieRating,
  setMovieToBasicList,
  setMovieToBasicListLoading,
  setTypeLoading,
} from './actionCreators';
import { MovieDetailsAction } from './types';
import { Dispatch } from 'redux';
import { ApiAccount } from '../../api/apiAccount';
import {
  initialMovieAccountState,
  MovieTypesCustomListsLoadingState,
  MovieTypesOnlyBooleanState,
} from './reducers';
import {
  selectUserAuthStatus,
  selectUserDataDetails,
} from '../userAuth/selectors';
import { GetRootState } from '../rootStore';
import { selectMovieAccountState } from './selectors';
import {
  selectCustomLists,
  selectCustomListsItemCount,
} from '../customLists/selectors';
import { ICustomList } from '../../types/entities';
import { ISelectOption } from '../../types/uiTypes';
import { updateListItemCount } from '../customLists/actionCreators';
import { UpdateListItemCountAction } from '../customLists/types';
import { SetAppErrorAction } from '../app/types';
import { setAppError } from '../app/actionCreators';

export const loadMovieDetails = (id: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const rateMovie = (movieId: number, value: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>) => {
    try {
      const ratingRes = await ApiAccount.rateMovie(movieId, value);
      if (ratingRes.status_code === 1 || ratingRes.status_code === 12) {
        dispatch(setMovieRating(value));
        return;
      }
      dispatch(setMovieRating(0));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    }
  };
};

export const deleteRatingMovie = (movieId: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>) => {
    try {
      const ratingRes = await ApiAccount.deleteRatingMovie(movieId);
      if (ratingRes.status_code === 13) {
        dispatch(setMovieRating(0));
      }
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    }
  };
};

export const loadMovieAccountState = (movieId: number) => {
  return async (
    dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      const isAuth = selectUserAuthStatus(getState());
      if (isAuth) {
        dispatch(setMovieAccountStateLoading(true));
        const accountState = await ApiAccount.loadMovieAccountState(movieId);
        dispatch(
          setMovieAccountState(
            accountState.id ? accountState : initialMovieAccountState
          )
        );
        return;
      }
      dispatch(setMovieAccountState(initialMovieAccountState));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setMovieAccountStateLoading(false));
    }
  };
};

export const addMediaToBasicList = (
  typeList: keyof typeof MovieTypesOnlyBooleanState,
  media_type: keyof typeof ApiMovies.media_types,
  media_id: number
) => {
  return async (
    dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(setMovieToBasicListLoading(typeList, true));
      const account_id = selectUserDataDetails(getState()).id;
      const newValueList = !selectMovieAccountState(getState())[typeList];
      const res = await ApiAccount.addMediaToBasicList(
        ApiAccount.POST[typeList](account_id),
        media_type,
        media_id,
        typeList,
        newValueList
      );
      if (res.status_code === 1 || res.status_code === 13) {
        dispatch(setMovieToBasicList(typeList, newValueList));
      }
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(setMovieToBasicListLoading(typeList, false));
    }
  };
};

export const checkMovieStatusCustomLists = (id: number) => {
  return async (
    dispatch: Dispatch<MovieDetailsAction | SetAppErrorAction>,
    getState: GetRootState
  ) => {
    try {
      dispatch(
        setMovieCustomListsLoading(
          MovieTypesCustomListsLoadingState.isLoadingStatus,
          true
        )
      );

      const customLists = selectCustomLists(getState());
      let filteredCustomLists: ICustomList[] = [];

      for (const customList of customLists) {
        const res = await ApiAccount.manipulateCustomList(
          ApiAccount.GET.movieStatusCustomList(+customList.id),
          ApiAccount.ManipulationCustomListTypes.GET,
          null,
          { movie_id: String(id) }
        );
        if (!res.item_present) {
          filteredCustomLists.push(customList);
        }
      }

      dispatch(setMovieCustomListsData(filteredCustomLists));
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(
        setMovieCustomListsLoading(
          MovieTypesCustomListsLoadingState.isLoadingStatus,
          false
        )
      );
    }
  };
};

export const addMovieToCustomListsEffect = (
  customListsData: ISelectOption[],
  movieId: number
) => {
  return async (
    dispatch: Dispatch<
      MovieDetailsAction | UpdateListItemCountAction | SetAppErrorAction
    >,
    getState: GetRootState
  ) => {
    try {
      dispatch(
        setMovieCustomListsLoading(
          MovieTypesCustomListsLoadingState.isSubmitLoading,
          true
        )
      );

      const customListsIds: number[] = [];
      for (const customListOption of customListsData) {
        const res = await ApiAccount.manipulateCustomList(
          ApiAccount.POST.addMovieCustomList(+customListOption.value),
          ApiAccount.ManipulationCustomListTypes.POST,
          { media_id: movieId }
        );
        if (res.success) {
          customListsIds.push(+customListOption.value);
        }
      }

      dispatch(addMovieCustomLists(customListsIds));

      for (const customListsId of customListsIds) {
        const item_count = selectCustomListsItemCount(customListsId)(
          getState()
        );
        item_count !== undefined &&
          dispatch(updateListItemCount(customListsId, item_count + 1));
      }
    } catch (e) {
      console.log(e);
      dispatch(setAppError(true));
    } finally {
      dispatch(
        setMovieCustomListsLoading(
          MovieTypesCustomListsLoadingState.isSubmitLoading,
          false
        )
      );
    }
  };
};
