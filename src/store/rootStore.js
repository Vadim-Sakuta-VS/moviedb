import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieListReducer } from './movieList/reducers';
import { movieDetailsReducer } from './movieDetails/reducers';
import { movieReviewsReducer } from './movieReviews/reducers';
import { companiesListReducer } from './companiesList/reducers';
import { companyDetailsReducer } from './companyDetails/reducers';
import { homeReducer } from './home/reducers';

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
  movieReviews: movieReviewsReducer,
  companiesList: companiesListReducer,
  companyDetails: companyDetailsReducer,
  home: homeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
