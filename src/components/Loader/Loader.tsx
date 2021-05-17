import React, { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledLoader = styled.div`
  min-height: inherit;
  height: inherit;
`;

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <StyledLoader className='d-flex justify-content-center align-items-center'>
        <Spinner animation='border' variant='success' />
      </StyledLoader>
    );
  }

  return <>{children}</>;
};

export default Loader;
