import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404';
import { withHeaderLayout } from './components/HOC/withHeaderLayout';
import CompaniesList from './components/CompaniesList/CompaniesList';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import HomePage from './components/HomePage/HomePage';
import MovieListByTypePage from './components/MovieListByTypePage/MovieListByTypePage';
import MovieListFilterPage from './components/MovieListFilterPage/MovieListFilterPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <main className='page'>
          <Switch>
            <Route exact path='/' render={() => withHeaderLayout(HomePage)} />
            <Route
              exact
              path='/movies/:type'
              render={() => withHeaderLayout(MovieListByTypePage)}
            />
            <Route
              exact
              path='/movies'
              render={() => withHeaderLayout(MovieListFilterPage)}
            />
            <Route
              exact
              path='/movie/:id'
              render={() => withHeaderLayout(MovieDetails)}
            />
            <Route
              exact
              path='/companies'
              render={() => withHeaderLayout(CompaniesList)}
            />
            <Route
              exact
              path='/company/:id'
              render={() => withHeaderLayout(CompanyDetails)}
            />
            <Route path='*' component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
