import { GenresAction, GenresActions, GenresState } from './types';

const initialState: GenresState = {
  data: [],
};

function genresReducer(
  state = initialState,
  action: GenresAction
): GenresState {
  switch (action.type) {
    case GenresActions.SET_GENRES:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
}

export { genresReducer };
