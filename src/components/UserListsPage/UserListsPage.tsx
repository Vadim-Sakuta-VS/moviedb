import React, { FC, useEffect } from 'react';
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
  selectMovieList,
  selectMovieListLoading,
  selectTotalPages,
} from '../../store/movieList/selectors';
import Loader from '../Loader/Loader';
import styled from 'styled-components';

const TabLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  &:hover {
    text-decoration: none;
  }
`;

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
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectMovieListLoading);
  const dispatch = useDispatch();
  const listsKeys = Object.keys(BASIC_LISTS_TYPES);

  const paramsObj = parseGetParamsStr(location.search);
  const currentPage = +paramsObj.page || 1;
  const sort_by = paramsObj.sort_by;

  useEffect(() => {
    if (isPathnameContainsListType()) {
      if (!sort_by) {
        paramsObj.sort_by = SortingDateTypes.desc;
      }
      dispatch(
        loadUserBasicMovieList(
          getListType() as keyof typeof ApiAccount.GET,
          paramsObj
        )
      );
    }
  }, [location]);

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
    if (currentPage !== page) {
      paramsObj.page = page.toString();
      history.push({
        pathname: location.pathname,
        search: stringifyGetParamsObj(paramsObj),
      });
    }
  };

  const navItemElements = listsKeys.map((key) => (
    <Nav.Item key={key}>
      <Nav.Link
        as='button'
        eventKey={key}
        style={{ padding: 0, backgroundColor: 'transparent' }}
      >
        <TabLink
          to={{
            pathname: `/lists/${key.toLowerCase()}`,
            search: stringifyGetParamsObj({
              sort_by: SortingDateTypes.desc,
              page: '1',
            }),
          }}
        >
          {BASIC_LISTS_TYPES[key]}
        </TabLink>
      </Nav.Link>
    </Nav.Item>
  ));

  const tabPaneElements = listsKeys.map((key) => (
    <Tab.Pane key={key} eventKey={key}>
      <Loader isLoading={isLoading}>
        {movies.length ? (
          <MovieList
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
            movies={movies}
          />
        ) : (
          <p className='text-center font-weight-bold text-secondary'>
            No movies
          </p>
        )}
      </Loader>
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
