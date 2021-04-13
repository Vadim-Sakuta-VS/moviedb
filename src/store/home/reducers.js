import { TOGGLE_GENRE } from './actions';

const initialState = {
  genresIds: [],
};

function toggleGenre(currentGenresIds, id) {
  let genresIds = [...currentGenresIds];
  genresIds = genresIds.filter((gId) => gId !== id);

  if (
    !currentGenresIds.length ||
    genresIds.length === currentGenresIds.length
  ) {
    genresIds.push(id);
  }

  return genresIds;
}

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GENRE:
      return {
        ...state,
        genresIds: toggleGenre(state.genresIds, action.payload),
      };
    default:
      return state;
  }
}

export { homeReducer };
