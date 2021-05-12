import { ApiMovies } from '../../api/apiMovies';
import {
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
import { selectCustomLists } from '../customLists/selectors';
import { ICustomList } from '../../types/entities';

export const loadMovieDetails = (id: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      dispatch(setTypeLoading(true));
      const data = await ApiMovies.loadMovieDetails(id);
      if (!data.id) {
        window.location.replace('/page404');
      }

      dispatch(setMovieDetails(data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setTypeLoading(false));
    }
  };
};

export const rateMovie = (movieId: number, value: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      const ratingRes = await ApiAccount.rateMovie(movieId, value);
      if (ratingRes.status_code === 1 || ratingRes.status_code === 12) {
        dispatch(setMovieRating(value));
        return;
      }
      dispatch(setMovieRating(0));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteRatingMovie = (movieId: number) => {
  return async (dispatch: Dispatch<MovieDetailsAction>) => {
    try {
      const ratingRes = await ApiAccount.deleteRatingMovie(movieId);
      if (ratingRes.status_code === 13) {
        dispatch(setMovieRating(0));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const loadMovieAccountState = (movieId: number) => {
  return async (
    dispatch: Dispatch<MovieDetailsAction>,
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
    dispatch: Dispatch<MovieDetailsAction>,
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
    } finally {
      dispatch(setMovieToBasicListLoading(typeList, false));
    }
  };
};

export const checkMovieStatusCustomLists = (id: number) => {
  return async (
    dispatch: Dispatch<MovieDetailsAction>,
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
          ApiAccount.GET.movieStatusCustomList(customList.id),
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
