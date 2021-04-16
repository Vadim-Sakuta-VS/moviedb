import { SET_MOVIES_DATA, SET_MOVIES_TYPE_LOADING } from './actions';

export const MOVIE_TYPES = {
  NOW_PLAYING: 'Now playing',
  POPULAR: 'Popular',
  TOP_RATED: 'Top rated',
  UPCOMING: 'Upcoming',
};

Object.defineProperty(MOVIE_TYPES, 'getTitle', {
  value: function (type) {
    return this[type.toUpperCase()];
  },
});

const initialState = {
  data: Object.keys(MOVIE_TYPES).reduce((acc, key) => {
    return { ...acc, [key.toLowerCase()]: { data: [], isLoading: false } };
  }, {}),
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES_TYPE_LOADING:
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
    case SET_MOVIES_DATA:
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
