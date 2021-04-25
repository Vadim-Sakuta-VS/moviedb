import { HomeAction, HomeActions, HomeState } from './types';

export const MOVIE_TYPES = {
  NOW_PLAYING: 'Now playing',
  POPULAR: 'Popular',
  TOP_RATED: 'Top rated',
  UPCOMING: 'Upcoming',
};

const initialState: HomeState = {
  data: Object.keys(MOVIE_TYPES).reduce((acc, key) => {
    return {
      ...acc,
      [key.toLowerCase()]: { data: [], isLoading: false },
    };
  }, {}),
};

function homeReducer(state = initialState, action: HomeAction): HomeState {
  switch (action.type) {
    case HomeActions.SET_MOVIES_TYPE_LOADING:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: {
            ...state.data[action.payload.type],
            isLoading: action.payload.isLoading,
          },
        },
      };
    case HomeActions.SET_MOVIES_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: {
            data: [
              ...state.data[action.payload.type].data,
              ...action.payload.data,
            ],
            isLoading: false,
          },
        },
      };
    default:
      return state;
  }
}

export { homeReducer };
