import React, { FC } from 'react';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';
import styled from 'styled-components';

const StyledMovieProductionCompany = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface MovieProductionCompanyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  logoPath: ImgPathType;
  companyName: string;
}

export const MovieProductionCompany: FC<MovieProductionCompanyProps> = ({
  logoPath,
  companyName,
  style,
}) => {
  return (
    <StyledMovieProductionCompany className='col-auto' style={style}>
      <Image src={`${ApiMovies.getImage(logoPath)}`} width={100} rounded />
      <p className='mt-2'>{companyName}</p>
    </StyledMovieProductionCompany>
  );
};
