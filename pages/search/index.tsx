import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuery,
  selectSearchCurrentPage,
  selectSearchData,
  selectSearchLoading,
  selectSearchLoadingMore,
  selectSearchTotalPages,
} from '../../src/store/search/selectors';
import {
  isClientSide,
  parseGetParamsStr,
  stringifyGetParamsObj,
} from '../../src/utils/utils';
import {
  loadMoreDataByQuery,
  searchDataByQuery,
} from '../../src/store/search/effects';
import { setQuery } from '../../src/store/search/actionCreators';
import { SearchType, SearchTypes } from '../../src/store/search/reducers';
import SearchForm, {
  SearchFormValues,
} from '../../src/components/SearchForm/SearchForm';
import { createParamObj } from '../../src/utils/selectUtils';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../src/components/MovieCard/MovieCard';
import CompanyLinkItem from '../../src/components/CompanyLinkItem/CompanyLinkItem';
import ButtonLoad from '../../src/components/ButtonLoad/ButtonLoad';
import { useRouter } from 'next/router';
import { ParamGetObj } from '../../src/types/params';
import { GetServerSideProps, NextPage } from 'next';
import { withHeaderLayout } from '../../src/components/HOC/withHeaderLayout';

const SearchPage: NextPage = () => {
  const router = useRouter();
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectSearchLoading);
  const isLoadingMore = useSelector(selectSearchLoadingMore);
  const { movies, companies } = useSelector(selectSearchData);
  const currentPage = useSelector(selectSearchCurrentPage);
  const totalPages = useSelector(selectSearchTotalPages);
  const dispatch = useDispatch();

  const locationSearch = stringifyGetParamsObj(router.query as ParamGetObj);
  const paramObj = router.query as ParamGetObj;

  useEffect(() => {
    if (paramObj.search_type && paramObj.query && query !== paramObj.query) {
      dispatch(searchDataByQuery(paramObj));
      dispatch(setQuery(String(paramObj.query)));
    }
  }, []);

  if (
    isClientSide() &&
    paramObj.search_type &&
    !Object.keys(SearchTypes).includes(String(paramObj.search_type))
  ) {
    router.replace('/page404');
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
    const paramObj = createParamObj({ ...data });
    router.replace(
      {
        pathname: router.pathname,
        search: stringifyGetParamsObj(paramObj),
      },
      undefined,
      { shallow: true }
    );
    dispatch(searchDataByQuery(paramObj));
  };

  const handleChangePage = () => {
    const paramObj = createParamObj({
      ...parseGetParamsStr(locationSearch),
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
              !locationSearch ? (
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
          locationSearch &&
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default withHeaderLayout(SearchPage);
