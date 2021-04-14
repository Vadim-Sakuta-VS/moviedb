import {
  HIDE_GENRES_LOADING,
  HIDE_NOW_PLAYING_MOVIES_LOADING,
  HIDE_POPULAR_MOVIES_LOADING,
  HIDE_TOP_RATED_MOVIES_LOADING,
  HIDE_UPCOMING_MOVIES_LOADING,
  SET_GENRES,
  SET_NOW_PLAYING_MOVIES,
  SET_POPULAR_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_UPCOMING_MOVIES,
  SHOW_GENRES_LOADING,
  SHOW_NOW_PLAYING_MOVIES_LOADING,
  SHOW_POPULAR_MOVIES_LOADING,
  SHOW_TOP_RATED_MOVIES_LOADING,
  SHOW_UPCOMING_MOVIES_LOADING,
} from './actions';

const initialState = {
  genres: {
    isLoading: false,
    data: [],
  },
  nowPlayingMovies: {
    isLoading: false,
    data: [],
  },
  popularMovies: {
    isLoading: false,
    data: [],
  },
  topRatedMovies: {
    isLoading: false,
    data: [],
  },
  upcomingMovies: {
    isLoading: false,
    data: [],
  },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_GENRES_LOADING:
      return { ...state, genres: { ...state.genres, isLoading: true } };
    case SHOW_NOW_PLAYING_MOVIES_LOADING:
      return {
        ...state,
        nowPlayingMovies: { ...state.nowPlayingMovies, isLoading: true },
      };
    case SHOW_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popularMovies: { ...state.popularMovies, isLoading: true },
      };
    case SHOW_TOP_RATED_MOVIES_LOADING:
      return {
        ...state,
        topRatedMovies: { ...state.topRatedMovies, isLoading: true },
      };
    case SHOW_UPCOMING_MOVIES_LOADING:
      return {
        ...state,
        upcomingMovies: { ...state.upcomingMovies, isLoading: true },
      };
    case HIDE_GENRES_LOADING:
      return { ...state, genres: { ...state.genres, isLoading: false } };
    case HIDE_NOW_PLAYING_MOVIES_LOADING:
      return {
        ...state,
        nowPlayingMovies: { ...state.nowPlayingMovies, isLoading: false },
      };
    case HIDE_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        popularMovies: { ...state.popularMovies, isLoading: false },
      };
    case HIDE_TOP_RATED_MOVIES_LOADING:
      return {
        ...state,
        topRatedMovies: { ...state.topRatedMovies, isLoading: false },
      };
    case HIDE_UPCOMING_MOVIES_LOADING:
      return {
        ...state,
        upcomingMovies: { ...state.upcomingMovies, isLoading: false },
      };
    case SET_GENRES:
      return {
        ...state,
        genres: {
          data: action.payload,
          isLoading: false,
        },
      };
    case SET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: {
          data: action.payload,
          isLoading: false,
        },
      };
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: {
          data: action.payload,
          isLoading: false,
        },
      };
    case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: {
          data: action.payload,
          isLoading: false,
        },
      };
    case SET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: {
          data: action.payload,
          isLoading: false,
        },
      };
    default:
      return state;
  }
}

export { homeReducer };
