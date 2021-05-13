import { RootState } from '../rootStore';

export const selectCustomListDetailsData = (state: RootState) =>
  state.customListDetails.data;
export const selectCustomListDetailsLoading = (state: RootState) =>
  state.customListDetails.loading;
export const selectManipulationMovieId = (state: RootState) =>
  state.customListDetails.manipulation_movie_id;
