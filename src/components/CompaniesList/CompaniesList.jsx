import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from '../SearchForm/SearchForm';
import CompanyLinkItem from '../CompanyLinkItem/CompanyLinkItem';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCompaniesCurrentPage,
  selectCompaniesList,
  selectCompaniesLoading,
  selectCompaniesLoadingMore,
  selectCompaniesTotalPages,
  selectQuery,
} from '../../store/companiesList/selectors';
import { setQuery } from '../../store/companiesList/actions';
import {
  loadMoreCompaniesByQuery,
  searchCompaniesByQuery,
} from '../../store/companiesList/effects';

const CompaniesList = () => {
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectCompaniesLoading);
  const isLoadingMore = useSelector(selectCompaniesLoadingMore);
  const data = useSelector(selectCompaniesList);
  const currentPage = useSelector(selectCompaniesCurrentPage);
  const totalPages = useSelector(selectCompaniesTotalPages);
  const dispatch = useDispatch();

  const onChangeQuery = (value) => {
    dispatch(setQuery(value));
  };

  const onSubmitHandler = () => {
    dispatch(searchCompaniesByQuery());
  };

  const handleChangePage = () => {
    dispatch(loadMoreCompaniesByQuery());
  };

  const companiesElements =
    Array.isArray(data) &&
    data.map((company) => (
      <CompanyLinkItem
        key={company.id}
        title={company.name}
        pathLogo={company.logo_path}
        pathLink={`/company/${company.id}`}
      />
    ));

  return (
    <Container className='pt-4 pb-4'>
      <Row className='m-0 justify-content-center'>
        <Col className='col-sm-10 col-md-8 col-lg-6 mb-5'>
          <SearchForm
            queryValue={query}
            onChange={onChangeQuery}
            onSubmit={onSubmitHandler}
            isLoading={isLoading}
          />
        </Col>
      </Row>
      <Row className='flex-column'>
        <Col>
          <Row className='justify-content-center'>
            {companiesElements ? (
              companiesElements
            ) : (
              <span className='text-center font-weight-bold text-secondary'>
                {data}
              </span>
            )}
          </Row>
        </Col>
        {(totalPages && currentPage !== totalPages) ||
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

export default CompaniesList;
