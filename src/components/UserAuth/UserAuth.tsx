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
import DropdownItem from 'react-bootstrap/DropdownItem';
import {
  BASIC_LISTS_TYPES,
  SortingDateTypes,
} from '../UserListsPage/UserListsPage';
import { stringifyGetParamsObj } from '../../utils/utils';
import styled from 'styled-components';

const DropdownMenuLink = styled(Link)`
  display: block;
  line-height: 32px;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

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
          <Dropdown className='menu-dropdown'>
            <Dropdown.Toggle
              as={DropdownToggle}
              id='dropdown-custom-components'
            >
              {user.username}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: '100%' }}>
              <DropdownItem eventKey='1' className='p-0' as='button'>
                <DropdownMenuLink
                  to={`/profile/${user.id}`}
                  className='pl-1 pr-1'
                >
                  Profile
                </DropdownMenuLink>
              </DropdownItem>
              <DropdownItem eventKey='1' className='p-0' as='button'>
                <DropdownMenuLink
                  to={{
                    pathname: `/lists/${Object.keys(
                      BASIC_LISTS_TYPES
                    )[0].toLowerCase()}`,
                    search: stringifyGetParamsObj({
                      sort_by: SortingDateTypes.desc,
                      page: '1',
                    }),
                  }}
                  className='pl-1 pr-1'
                >
                  Lists
                </DropdownMenuLink>
              </DropdownItem>
              <Dropdown.Item eventKey='1' className='p-0' as='button'>
                <DropdownMenuLink to='/lists/custom' className='pl-1 pr-1'>
                  Custom lists
                </DropdownMenuLink>
              </Dropdown.Item>
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
