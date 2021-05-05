import React, { FC } from 'react';
import { Spinner } from 'react-bootstrap';

type SpinnerWrapperProps = {
  isLoading: boolean;
};

const SpinnerWrapper: FC<SpinnerWrapperProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <div className='d-flex justify-content-center'>
      <Spinner animation='border' variant='success' />
    </div>
  ) : (
    <>{children}</>
  );
};

export default SpinnerWrapper;
