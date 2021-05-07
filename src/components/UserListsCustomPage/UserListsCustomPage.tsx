import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccordionCustom from '../AccordionCustom/AccordionCustom';
import CustomListForm from '../CustomListForm/CustomListForm';

const UserListsCustomPage = () => {
  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <h1 className='font-weight-bold'>Custom lists</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AccordionCustom
            buttonText='Add'
            buttonIcon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
              </svg>
            }
          >
            <CustomListForm />
          </AccordionCustom>
        </Col>
      </Row>
    </Container>
  );
};

export default UserListsCustomPage;
