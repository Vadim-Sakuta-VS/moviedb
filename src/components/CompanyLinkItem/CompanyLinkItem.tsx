import React, { FC } from 'react';
import { Alert, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';
import styled from 'styled-components';
import { AlertProps } from 'react-bootstrap/Alert';

const StyledAlert = styled(Alert)<AlertProps>`
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 0 #212121;
  }
`;

const StyledLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

interface CompanyLinkItemProps {
  title: string;
  pathLogo: ImgPathType;
  pathLink: string;
}

const CompanyLinkItem: FC<CompanyLinkItemProps> = ({
  title,
  pathLogo,
  pathLink,
}) => {
  return (
    <Col
      className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'
      style={{ maxWidth: 320 }}
    >
      <StyledAlert variant='secondary' className='h-100 m-0 p-0'>
        <Link href={pathLink} passHref={true}>
          <StyledLink className='h-100 d-flex flex-column justify-content-center align-items-center p-3 text-dark'>
            <Image width={100} rounded src={ApiMovies.getImage(pathLogo)} />
            <p className='m-0 mt-1 text-center'>{title}</p>
          </StyledLink>
        </Link>
      </StyledAlert>
    </Col>
  );
};

export default CompanyLinkItem;
