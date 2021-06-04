import React, { FC } from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/types';

type StyledBackdropProps = {
  isVisible: boolean;
  backgroundColor?: string;
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledBackdropProps) =>
    props.backgroundColor || '#fff'};
  visibility: ${(props: StyledBackdropProps) =>
    props.isVisible ? 'visible' : 'hidden'};
  opacity: ${(props: StyledBackdropProps) => (props.isVisible ? 1 : 0)};
  transition: 0.2s;
  z-index: 20;
`;

interface BackdropProps extends StyledBackdropProps {
  spinnerVariant: Variant;
}

const Backdrop: FC<BackdropProps> = ({ spinnerVariant, ...props }) => {
  return (
    <StyledBackdrop {...props}>
      <Spinner
        animation='border'
        variant={spinnerVariant}
        style={{ width: '3rem', height: '3rem' }}
      />
    </StyledBackdrop>
  );
};

export default Backdrop;
