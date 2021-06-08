import { MovieListAction, MovieListActions, MovieListState } from './types';

const initialState: MovieListState = {
  data: [],
  totalPages: 0,
  isLoading: false,
  movieType: '',
};

function movieListReducer(
  state = initialState,
  action: MovieListAction
): MovieListState {
  switch (action.type) {
    case MovieListActions.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case MovieListActions.SET_MOVIES_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case MovieListActions.SET_MOVIES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export { movieListReducer };
