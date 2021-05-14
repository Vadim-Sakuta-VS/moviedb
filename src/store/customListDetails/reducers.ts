import {
  CustomListDetailsAction,
  CustomListDetailsActions,
  CustomListDetailsState,
} from './types';

const initialState: CustomListDetailsState = {
  data: {
    id: 0,
    name: '',
    favorite_count: 0,
    item_count: 0,
    description: '',
    items: [],
  },
  loading: {
    isDetailsLoading: false,
    isClearListLoading: false,
    isRemoveMovieLoading: false,
  },
  manipulation_movie_id: 0,
};

function customListDetailsReducer(
  state = initialState,
  action: CustomListDetailsAction
): CustomListDetailsState {
  switch (action.type) {
    case CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CustomListDetailsActions.SET_CUSTOM_LIST_DETAILS_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.type]: action.payload.isLoading,
        },
      };
    case CustomListDetailsActions.SET_MANIPULATION_MOVIE_ID:
      return { ...state, manipulation_movie_id: action.payload };
    case CustomListDetailsActions.DELETE_MOVIE_CUSTOM_LIST:
      return {
        ...state,
        data: {
          ...state.data,
          items: state.data.items.filter(
            (movie) => movie.id !== action.payload
          ),
        },
      };
    case CustomListDetailsActions.CLEAR_CUSTOM_LIST_DETAILS:
      return {
        ...state,
        data: {
          ...state.data,
          items: [],
        },
      };
    default:
      return state;
  }
}

export { customListDetailsReducer };
