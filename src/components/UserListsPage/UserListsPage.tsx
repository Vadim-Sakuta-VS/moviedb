import React, { FC, useEffect } from 'react';
import './UserListsPage.scss';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import { KeyValueStringType } from '../../types/params';
import MovieList from '../MovieList/MovieList';
import ToggleSortingSearch from '../ToggleSortingSearch/ToggleSortingSearch';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserBasicMovieList } from '../../store/movieList/effects';
import { ApiAccount } from '../../api/apiAccount';
import {
  selectCurrentPage,
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import { changePage } from '../../store/movieList/actionCreators';
import SpinnerWrapper from '../SpinnerWrapper/SpinnerWrapper';

export const BASIC_LISTS_TYPES: KeyValueStringType = {
  RATED: 'Rated',
  FAVORITE: 'Favorite',
  WATCHLIST: 'Watchlist',
};

export const SortingDateTypes = {
  asc: 'created_at.asc',
  desc: 'created_at.desc',
};

const UserListsPage: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const movies = useSelector(selectMovieList);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectMovieListLoading);
  const dispatch = useDispatch();
  const listsKeys = Object.keys(BASIC_LISTS_TYPES);

  useEffect(() => {
    return () => {
      dispatch(changePage(1));
    };
  }, []);

  useEffect(() => {
    if (isPathnameContainsListType()) {
      const paramsObj = parseGetParamsStr(location.search);
      dispatch(changePage(+paramsObj.page || 1));
      if (!paramsObj.sort_by) {
        paramsObj.sort_by = SortingDateTypes.desc;
      }
      dispatch(
        loadUserBasicMovieList(
          getListType() as keyof typeof ApiAccount.GET,
          paramsObj
        )
      );
    }
  }, [location.search, location.pathname]);

  const isPathnameContainsListType = () => {
    const pathArr = location.pathname.split('/');
    return (
      (pathArr.length === 3 &&
        listsKeys.some((key) => pathArr.includes(key.toLowerCase()))) ||
      location.pathname === '/lists'
    );
  };

  const getListType = () => {
    const pathArr = location.pathname.split('/');
    return pathArr[2] || listsKeys[0].toLowerCase();
  };

  if (!isPathnameContainsListType()) {
    return <Redirect to='/page404' />;
  }

  const onChangePage = (page: number) => {
    const paramsObj = parseGetParamsStr(location.search);
    paramsObj.page = page.toString();
    history.push({
      pathname: location.pathname,
      search: stringifyGetParamsObj(paramsObj),
    });
    dispatch(changePage(page));
  };

  const navItemElements = listsKeys.map((key) => (
    <Nav.Item key={key}>
      <Nav.Link as='button' eventKey={key}>
        <Link
          to={{
            pathname: `/lists/${key.toLowerCase()}`,
            search: stringifyGetParamsObj({
              sort_by: SortingDateTypes.desc,
              page: '1',
            }),
          }}
          className='tabs__link'
        >
          {BASIC_LISTS_TYPES[key]}
        </Link>
      </Nav.Link>
    </Nav.Item>
  ));

  const tabPaneElements = listsKeys.map((key) => (
    <Tab.Pane key={key} eventKey={key}>
      <SpinnerWrapper isLoading={isLoading}>
        {movies.length ? (
          <MovieList
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
            movies={movies}
          />
        ) : (
          <span className='text-center font-weight-bold text-secondary'>
            No movies
          </span>
        )}
      </SpinnerWrapper>
    </Tab.Pane>
  ));

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <h1 className='font-weight-bold'>Your lists</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container
            id='left-tabs-example'
            activeKey={getListType().toUpperCase()}
          >
            <Row className='align-items-center mb-3'>
              <Col>
                <Nav variant='tabs' className='tabs'>
                  {navItemElements}
                </Nav>
              </Col>
              <Col className='col-auto'>
                <ToggleSortingSearch
                  title='Created at'
                  keyType='sort_by'
                  ascValue={SortingDateTypes.asc}
                  descValue={SortingDateTypes.desc}
                />
              </Col>
            </Row>
            <Row>
              <Col className='p-0'>
                <Tab.Content>{tabPaneElements}</Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserListsPage;
