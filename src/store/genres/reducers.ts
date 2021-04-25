import { GenresAction, GenresActions, GenresState } from './types';

const initialState: GenresState = {
  data: [],
  isLoading: false,
};

function genresReducer(
  state = initialState,
  action: GenresAction
): GenresState {
  switch (action.type) {
    case GenresActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case GenresActions.SET_GENRES:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
}

export { genresReducer };
