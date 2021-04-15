import {
  HIDE_GENRES_LOADING,
  SET_GENRES,
  SET_MOVIES_DATA,
  SET_MOVIES_TYPE_LOADING,
  SHOW_GENRES_LOADING,
} from './actions';

export const MOVIE_TYPES = {
  NOW_PLAYING: 'Now playing',
  POPULAR: 'Popular',
  TOP_RATED: 'Top rated',
  UPCOMING: 'Upcoming',
};

const initialState = {
  genres: {
    isLoading: false,
    data: [],
  },
  data: Object.keys(MOVIE_TYPES).reduce((acc, prop) => {
    return { ...acc, [MOVIE_TYPES[prop]]: { data: [], isLoading: false } };
  }, {}),
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_GENRES_LOADING:
      return { ...state, genres: { ...state.genres, isLoading: true } };
    case HIDE_GENRES_LOADING:
      return { ...state, genres: { ...state.genres, isLoading: false } };
    case SET_GENRES:
      return {
        ...state,
        genres: {
          data: action.payload,
          isLoading: false,
        },
      };
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
