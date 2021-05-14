import React, { FC } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { ICustomList } from '../../types/entities';
import { useDispatch, useSelector } from 'react-redux';
import { selectCustomListsFetchStateByType } from '../../store/customLists/selectors';
import { CUSTOM_LISTS_ACTIONS_TYPES } from '../../store/customLists/reducers';
import { deleteCustomList } from '../../store/customLists/effects';

type CustomListItemProps = {
  list: ICustomList;
};

const CustomListItem: FC<CustomListItemProps> = ({ list }) => {
  const { isLoading, list_id } = useSelector(
    selectCustomListsFetchStateByType(CUSTOM_LISTS_ACTIONS_TYPES.deleting)
  );
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteCustomList(+list.id));
  };

  return (
    <Col className='col-12 mb-2'>
      <Alert variant='secondary'>
        <Row>
          <Col>
            <h4>
              <Link to={`/lists/custom/${list.id}`}>{list.name}</Link>
            </h4>
          </Col>
          <Col className='col-auto'>
            <ButtonLoad
              isLoading={!!isLoading && list_id === list.id}
              classStyle='danger'
              isOutlineVariant={true}
              handleOnClick={onDelete}
              style={{ minWidth: '3.1rem', minHeight: 38 }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
              </svg>
            </ButtonLoad>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{list.description}</p>
          </Col>
        </Row>
        <Row style={{ fontSize: 23 }} className='justify-content-center'>
          <Col className='col-auto'>Item count: {list.item_count}</Col>
        </Row>
      </Alert>
    </Col>
  );
};

export default CustomListItem;
