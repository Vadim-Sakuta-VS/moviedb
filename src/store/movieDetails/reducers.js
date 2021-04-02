import { SET_MOVIE_DETAILS } from './actions';

function movieDetailsReducer(state = {}, action) {
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
}

export { movieDetailsReducer };
