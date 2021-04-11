import React from 'react';
import './CompanyLinkItem.scss';
import { Alert, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CompanyLinkItem = ({ title, pathImage, pathLink }) => {
  return (
    <Col className='col-auto mb-4'>
      <Alert variant='secondary' className='company-link-item h-100 m-0 p-0'>
        <Link
          to={pathLink}
          className='company-link h-100 d-flex flex-column justify-content-center align-items-center p-3 text-dark'
        >
          <Image
            width={100}
            rounded
            src='https://image.tmdb.org/t/p/w500/3T19XSr6yqaLNK8uJWFImPgRax0.png'
          />
          <p className='m-0 mt-1 text-center'>Warner Bros. Television</p>
        </Link>
      </Alert>
    </Col>
  );
};

export default CompanyLinkItem;
