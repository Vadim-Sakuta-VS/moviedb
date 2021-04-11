import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from '../SearchForm/SearchForm';
import CompanyLinkItem from '../CompanyLinkItem/CompanyLinkItem';
import ButtonLoad from '../ButtonLoad/ButtonLoad';

const CompaniesList = () => {
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <Container className='pt-4'>
      <Row className='m-0 justify-content-center'>
        <Col className='col-sm-10 col-md-8 col-lg-6 mb-5'>
          <SearchForm onSubmit={onSubmitHandler} isLoading={false} />
        </Col>
      </Row>
      <Row className='flex-column'>
        <Col className=''>
          <Row className='justify-content-center'>
            <CompanyLinkItem />
            <CompanyLinkItem />
            <CompanyLinkItem />
            <CompanyLinkItem />
            <CompanyLinkItem />
            <CompanyLinkItem />
            <CompanyLinkItem />
          </Row>
        </Col>
        <Col className='text-center'>
          <ButtonLoad
            isLoading={false}
            textValue='Show more'
            style={{ minWidth: '10rem', minHeight: '38px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompaniesList;
