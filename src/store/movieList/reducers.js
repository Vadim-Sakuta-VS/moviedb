import {
  CHANGE_PAGE,
  SET_MOVIES,
  SET_TOTAL_PAGES,
  UPDATE_DATA,
} from './actions';

const initialState = {
  data: [],
  currentPage: 1,
  totalPages: 0,
};

function movieListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_MOVIES:
      return { ...state, data: action.payload };
    case UPDATE_DATA:
      return initialState;
    default:
      return state;
  }
}

export { movieListReducer };
