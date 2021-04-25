import React, { FC } from 'react';
import './CompanyLinkItem.scss';
import { Alert, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ApiMovies } from '../../api/apiMovies';

interface CompanyLinkItemProps {
  title: string;
  pathLogo: string | null;
  pathLink: string;
}

const CompanyLinkItem: FC<CompanyLinkItemProps> = ({
  title,
  pathLogo,
  pathLink,
}) => {
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

export default CompanyLinkItem;
