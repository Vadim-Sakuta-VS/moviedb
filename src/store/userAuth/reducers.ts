import { UserAuthAction, UserAuthActions, UserAuthState } from './types';

const initialState: UserAuthState = {
  success: false,
  isLoading: true,
  status_message: '',
  user: {
    id: 0,
    avatar: {
      tmdb: {
        avatar_path: null,
      },
    },
    include_adult: false,
    iso_639_1: '',
    iso_3166_1: '',
    name: '',
    username: '',
  },
};

function userAuthReducer(
  state = initialState,
  action: UserAuthAction
): UserAuthState {
  switch (action.type) {
    case UserAuthActions.LOGIN_USER:
      return { ...state, ...action.payload };
    case UserAuthActions.SET_TYPE_LOADING:
      return { ...state, isLoading: action.payload };
    case UserAuthActions.SET_USER_DATA:
      return { ...state, user: action.payload, success: true };
    case UserAuthActions.LOGOUT_USER:
      return { ...initialState, isLoading: false };
    default:
      return state;
  }
}

export { userAuthReducer };
