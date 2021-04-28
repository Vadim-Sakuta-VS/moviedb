import React, { FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';

interface ButtonLoadProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: string;
  isLoading: boolean;
  textValue: string;
  handleOnClick?: () => void;
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

export default ButtonLoad;
