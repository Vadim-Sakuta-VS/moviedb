import { createStore, combineReducers } from 'redux';
import { movieListReducer } from './movieList/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export { store };
