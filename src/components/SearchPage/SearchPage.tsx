import React, { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm, { SearchFormValues } from '../SearchForm/SearchForm';
import CompanyLinkItem from '../CompanyLinkItem/CompanyLinkItem';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuery,
  selectSearchCurrentPage,
  selectSearchData,
  selectSearchLoading,
  selectSearchLoadingMore,
  selectSearchTotalPages,
} from '../../store/search/selectors';
import { setQuery } from '../../store/search/actionCreators';
import {
  searchDataByQuery,
  loadMoreDataByQuery,
} from '../../store/search/effects';
import { SearchType, SearchTypes } from '../../store/search/reducers';
import { createParamObj } from '../../utils/selectUtils';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';
import MovieCard from '../MovieCard/MovieCard';

const SearchPage: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectSearchLoading);
  const isLoadingMore = useSelector(selectSearchLoadingMore);
  const { movies, companies } = useSelector(selectSearchData);
  const currentPage = useSelector(selectSearchCurrentPage);
  const totalPages = useSelector(selectSearchTotalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    const paramObj = parseGetParamsStr(location.search);
    if (paramObj.search_type && paramObj.query && query !== paramObj.query) {
      dispatch(searchDataByQuery(paramObj));
      dispatch(setQuery(String(paramObj.query)));
    }
  }, []);

  const paramObj = parseGetParamsStr(location.search);

  if (
    paramObj.search_type &&
    !Object.keys(SearchTypes).includes(String(paramObj.search_type))
  ) {
    return <Redirect to='/page404' />;
  }

  const searchTypesOptions = Object.entries(SearchTypes).map(
    ([key, value]) => ({
      value,
      label: key[0].toUpperCase() + key.slice(1),
    })
  );
  const searchType = Object.keys(SearchTypes).find(
    (key) => key === paramObj.search_type
  ) as SearchType;
  const defaultValues = {
    search_type: {
      value: searchType || searchTypesOptions[0].value,
      label: searchType
        ? searchType[0].toUpperCase() + searchType.slice(1)
        : searchTypesOptions[0].label,
    },
    query: paramObj.query ? String(paramObj.query) : '',
  };

  const onSubmitHandler = (data: SearchFormValues) => {
    const paramObj = createParamObj({ ...data, page: '1' });
    history.replace({
      pathname: location.pathname,
      search: stringifyGetParamsObj(paramObj),
    });
    dispatch(searchDataByQuery(paramObj));
  };

  const handleChangePage = () => {
    const paramObj = createParamObj({
      ...parseGetParamsStr(location.search),
      page: String(currentPage + 1),
    });
    history.replace({
      pathname: location.pathname,
      search: stringifyGetParamsObj(paramObj),
    });
    dispatch(loadMoreDataByQuery(paramObj));
  };

  const OnChangeQuery = (value: string) => {
    dispatch(setQuery(value));
  };

  let elementsByType = {
    [SearchTypes.movies]: movies.map((m) => (
      <Col
        key={m.id}
        className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center'
      >
        <MovieCard key={m.id} movie={m} />
      </Col>
    )),
    [SearchTypes.companies]: companies.map((company) => (
      <CompanyLinkItem
        key={company.id}
        title={company.name}
        pathLogo={company.logo_path}
        pathLink={`/company/${company.id}`}
      />
    )),
  };

  return (
    <Container className='pt-4 pb-4'>
      <Row className='m-0 justify-content-center'>
        <Col className='col-sm-10 col-md-8 col-lg-6 mb-5'>
          <SearchForm
            searchTypesOptions={searchTypesOptions}
            onSubmit={onSubmitHandler}
            isLoading={isLoading}
            onChange={OnChangeQuery}
            defaultValues={defaultValues}
          />
        </Col>
      </Row>
      <Row className='flex-column'>
        {!isLoading ? (
          <Col>
            <Row className='justify-content-center'>
              {(elementsByType[searchType] &&
                elementsByType[searchType].length) ||
              !location.search ? (
                elementsByType[searchType]
              ) : (
                <span className='font-weight-bold text-secondary'>
                  Not found
                </span>
              )}
            </Row>
          </Col>
        ) : null}
        {(totalPages &&
          currentPage !== totalPages &&
          location.search &&
          !isLoading) ||
        (currentPage === totalPages && isLoadingMore) ? (
          <Col className='text-center'>
            <ButtonLoad
              isLoading={isLoadingMore}
              textValue='Show more'
              handleOnClick={handleChangePage}
              style={{ minWidth: '10rem', minHeight: '38px' }}
            />
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default SearchPage;
