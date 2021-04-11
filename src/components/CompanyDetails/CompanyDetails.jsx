import React, { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { MovieDetailsRow } from '../MovieDetails/MovieDetailsRow';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCompanyDetails,
  selectCompanyDetailsLoading,
} from '../../store/companyDetails/selectors';
import { useParams } from 'react-router-dom';
import { loadCompanyDetails } from '../../store/companyDetails/effects';

const CompanyDetails = () => {
  const { id } = useParams();
  const isLoading = useSelector(selectCompanyDetailsLoading);
  const company = useSelector(selectCompanyDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCompanyDetails(id));
  }, [id, dispatch]);

  const headquarters = company.headquarters || '---';
  const originCountry = company.origin_country || '---';
  const description = company.description || '---';
  const parentCompany =
    (company.parent_company && company.parent_company.name) || '---';

  return isLoading || company.id !== +id ? (
    <Loader isLoading={isLoading} />
  ) : (
    <Container className='pt-2 pb-2 movie-details'>
      <Row className='movie-details__main-row'>
        <Col>
          <Image
            src={`${ApiMovies.getImage(company.logo_path)}`}
            alt='Poster image'
            rounded
            className='w-100'
          />
        </Col>
        <Col>
          <Col className='h3 mb-3 font-weight-bold border-bottom border-success'>
            {company.name}
          </Col>
          <Container>
            <MovieDetailsRow title='Headquarters' value={headquarters} />
            <MovieDetailsRow title='Origin Country' value={originCountry} />
            <MovieDetailsRow title='Description' value={description} />
            <MovieDetailsRow title='Parent Company' value={parentCompany} />
            {company.homepage && (
              <MovieDetailsRow>
                <a href={company.homepage} target='_blank' rel='noreferrer'>
                  Home page
                </a>
              </MovieDetailsRow>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDetails;
