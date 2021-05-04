import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAuthStatus,
  selectUserDataDetails,
} from '../../store/userAuth/selectors';
import { logoutUser } from '../../store/userAuth/effects';
import DropdownToggle from './DropdownToggle';

const UserAuth: FC = () => {
  const location = useLocation();
  const isAuth = useSelector(selectUserAuthStatus);
  const user = useSelector(selectUserDataDetails);
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Row>
      {!isAuth ? (
        <Col>
          <Link
            to={{ pathname: '/login', state: { from: location } }}
            className='btn btn-outline-success'
          >
            Sign In
          </Link>
        </Col>
      ) : (
        <Col>
          <Dropdown>
            <Dropdown.Toggle
              as={DropdownToggle}
              id='dropdown-custom-components'
            >
              {user.username}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: '100%' }}>
              <Dropdown.Item
                eventKey='1'
                className='pl-1 pr-1'
                onClick={onLogoutHandler}
              >
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      )}
    </Row>
  );
};

export default UserAuth;
