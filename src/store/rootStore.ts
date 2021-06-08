import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieListReducer } from './movieList/reducers';
import { movieDetailsReducer } from './movieDetails/reducers';
import { movieReviewsReducer } from './movieReviews/reducers';
import { searchReducer } from './search/reducers';
import { genresReducer } from './genres/reducers';
import { userAuthReducer } from './userAuth/reducers';
import { appReducer } from './app/reducers';
import { customListsReducer } from './customLists/reducers';
import { customListDetailsReducer } from './customListDetails/reducers';

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
  movieReviews: movieReviewsReducer,
  search: searchReducer,
  genres: genresReducer,
  userAuth: userAuthReducer,
  app: appReducer,
  customLists: customListsReducer,
  customListDetails: customListDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type GetRootState = () => RootState;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
