import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route path='/movie/:id' component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
