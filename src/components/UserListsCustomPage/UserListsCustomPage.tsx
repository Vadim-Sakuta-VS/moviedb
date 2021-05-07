import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccordionCustom from '../AccordionCustom/AccordionCustom';
import CustomListForm from '../CustomListForm/CustomListForm';
import { useSelector } from 'react-redux';
import { selectCustomLists } from '../../store/customLists/selectors';
import CustomListItem from '../CustomListItem/CustomListItem';

const UserListsCustomPage = () => {
  const lists = useSelector(selectCustomLists);

  const listsElements = lists.map((l) => (
    <CustomListItem key={l.id} list={l} />
  ));

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <h1 className='font-weight-bold'>Custom lists</h1>
        </Col>
      </Row>
      <Row className='mb-2'>
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
      <Row className='justify-content-center'>
        {listsElements.length ? (
          listsElements
        ) : (
          <span className='text-center font-weight-bold text-secondary'>
            No lists
          </span>
        )}{' '}
      </Row>
    </Container>
  );
};

export default UserListsCustomPage;
