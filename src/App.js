import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movie/:id' component={MovieDetails} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
