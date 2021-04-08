import {
  CHANGE_PAGE,
  HIDE_LOADING,
  SET_MOVIE_ID,
  SET_MOVIES_REVIEWS,
  SET_TOTAL_PAGES,
  SHOW_LOADING,
} from './actions';

const initialState = {
  movieId: null,
  data: [],
  currentPage: 1,
  totalPages: null,
  isLoading: false,
};

function movieReviewsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
        data: [],
        currentPage: 1,
        totalPages: null,
      };
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    case SET_MOVIES_REVIEWS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        isLoading: false,
      };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
}

export { movieReviewsReducer };
