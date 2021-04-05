import { createStore, combineReducers, applyMiddleware } from 'redux';
import { movieListReducer } from './movieList/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
