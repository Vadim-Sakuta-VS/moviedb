import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404';
import { withHeaderLayout } from './components/HOC/withHeaderLayout';
import CompaniesList from './components/CompaniesList/CompaniesList';

function App() {
  return (
    <Router>
      <div className='App'>
        <main className='page'>
          <Switch>
            <Route exact path='/' render={() => withHeaderLayout(MovieList)} />
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
            <Route path='*' component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
