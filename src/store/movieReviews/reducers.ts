import {
  MovieReviewsAction,
  MovieReviewsActions,
  MovieReviewsState,
} from './types';

const initialState: MovieReviewsState = {
  movieId: null,
  data: [],
  currentPage: 1,
  totalPages: null,
  isLoading: false,
};

function movieReviewsReducer(
  state = initialState,
  action: MovieReviewsAction
): MovieReviewsState {
  switch (action.type) {
    case MovieReviewsActions.SET_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
        data: [],
        currentPage: 1,
        totalPages: null,
      };
    case MovieReviewsActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case MovieReviewsActions.SET_MOVIES_REVIEWS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case MovieReviewsActions.CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case MovieReviewsActions.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
}

export { movieReviewsReducer };
