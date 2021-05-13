import React, { FC } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { ModalProps } from 'react-bootstrap/Modal';

interface ConfirmModalProps extends ModalProps {
  onConfirm: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  onConfirm,
  onHide,
  ...props
}) => {
  return (
    <Modal
      {...props}
      onHide={onHide}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='justify-content-center'>
            <Col className='col-auto pr-0'>
              <Button
                variant='danger'
                style={{ minWidth: '5rem' }}
                onClick={onConfirm}
              >
                Yes
              </Button>
            </Col>
            <Col className='col-auto'>
              <Button
                variant='secondary'
                style={{ minWidth: '5rem' }}
                onClick={onHide}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;
