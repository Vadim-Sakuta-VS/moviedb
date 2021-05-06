import React, { FC } from 'react';
import './Loader.scss';
import { Spinner } from 'react-bootstrap';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className='loader d-flex justify-content-center align-items-center'>
        <Spinner animation='border' variant='success' />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
