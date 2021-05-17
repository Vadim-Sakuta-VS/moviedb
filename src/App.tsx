import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404';
import { withHeaderLayout } from './components/HOC/withHeaderLayout';
import CompaniesList from './components/CompaniesList/CompaniesList';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import HomePage from './components/HomePage/HomePage';
import MovieListByTypePage from './components/MovieListByTypePage/MovieListByTypePage';
import MovieListFilterPage from './components/MovieListFilterPage/MovieListFilterPage';
import LoginPage from './components/LoginPage/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserDataDetails } from './store/userAuth/effects';
import { selectAppLoading } from './store/app/selectors';
import Loader from './components/Loader/Loader';
import ProfilePage from './components/ProfilePage/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserListsPage from './components/UserListsPage/UserListsPage';
import UserListsCustomPage from './components/UserListsCustomPage/UserListsCustomPage';
import UserListCustomDetailsPage from './components/UserListCustomDetailsPage/UserListCustomDetailsPage';
import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
`;

function App() {
  const isAppLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserDataDetails());
  }, []);

  return (
    <Router>
      <div className='App'>
        <Loader isLoading={isAppLoading}>
          <Page className='page'>
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
              <Route exact path='/login' component={LoginPage} />
              <PrivateRoute exact path='/profile/:id'>
                {withHeaderLayout(ProfilePage)}
              </PrivateRoute>
              <PrivateRoute exact path='/lists/custom'>
                {withHeaderLayout(UserListsCustomPage)}
              </PrivateRoute>
              <PrivateRoute exact path='/lists/custom/:id'>
                {withHeaderLayout(UserListCustomDetailsPage)}
              </PrivateRoute>
              <PrivateRoute path='/lists'>
                {withHeaderLayout(UserListsPage)}
              </PrivateRoute>
              <Route path='*' component={Page404} />
            </Switch>
          </Page>
        </Loader>
      </div>
    </Router>
  );
}

export default App;
