import React from 'react';
import './CompanyLinkItem.scss';
import { Alert, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ApiMovies } from '../../api/apiMovies';

const CompanyLinkItem = ({ title, pathLogo, pathLink }) => {
  return (
    <Col className='col-3 mb-4'>
      <Alert variant='secondary' className='company-link-item h-100 m-0 p-0'>
        <Link
          to={pathLink}
          className='company-link h-100 d-flex flex-column justify-content-center align-items-center p-3 text-dark'
        >
          <Image width={100} rounded src={ApiMovies.getImage(pathLogo)} />
          <p className='m-0 mt-1 text-center'>{title}</p>
        </Link>
      </Alert>
    </Col>
  );
};

CompanyLinkItem.propTypes = {
  title: PropTypes.string.isRequired,
  pathLogo: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  pathLink: PropTypes.string.isRequired,
};

export default CompanyLinkItem;
