import React, { FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';
// import PropTypes from 'prop-types'

interface ButtonLoadProps {
  isLoading: boolean;
  textValue: string;
  handleOnClick?: () => void;
  [key: string]: any;
}

const ButtonLoad: FC<ButtonLoadProps> = ({
  isLoading,
  textValue,
  handleOnClick,
  ...props
}) => {
  return (
    <Button
      disabled={isLoading}
      variant='success'
      className='d-inline-flex justify-content-center align-items-center'
      onClick={handleOnClick}
      {...props}
    >
      {isLoading ? (
        <Spinner size='sm' animation='border' variant='light' />
      ) : (
        `${textValue}`
      )}
    </Button>
  );
};

// ButtonLoad.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   textValue: PropTypes.string.isRequired,
//   handleOnClick: PropTypes.func,
// };

export default ButtonLoad;
