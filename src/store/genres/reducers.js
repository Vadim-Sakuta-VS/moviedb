import { SET_GENRES, SET_GENRES_TYPE_LOADING } from './actions';

const initialState = {
  data: [],
  isLoading: false,
};

function genresReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_GENRES:
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
