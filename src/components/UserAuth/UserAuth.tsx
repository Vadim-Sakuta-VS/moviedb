import React, { FC } from 'react';
import Link from 'next/link';
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
import styled from 'styled-components';
import { useRouter } from 'next/router';

const DropdownMenuLink = styled.a`
  display: block;
  line-height: 32px;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const UserAuth: FC = () => {
  const router = useRouter();
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
          <Link href={{ pathname: '/login', query: { asPath: router.asPath } }}>
            <a className='btn btn-outline-success' style={{ minWidth: '6rem' }}>
              Sign In
            </a>
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
                <Link href='/profile' passHref={true}>
                  <DropdownMenuLink className='pl-1 pr-1'>
                    Profile
                  </DropdownMenuLink>
                </Link>
              </DropdownItem>
              <DropdownItem eventKey='1' className='p-0' as='button'>
                <Link
                  href={{
                    pathname: `/lists/${Object.keys(
                      BASIC_LISTS_TYPES
                    )[0].toLowerCase()}`,
                    query: { sort_by: SortingDateTypes.desc, page: '1' },
                  }}
                  passHref={true}
                >
                  <DropdownMenuLink className='pl-1 pr-1'>
                    Lists
                  </DropdownMenuLink>
                </Link>
              </DropdownItem>
              <Dropdown.Item eventKey='1' className='p-0' as='button'>
                <Link href='/custom_lists' passHref={true}>
                  <DropdownMenuLink className='pl-1 pr-1'>
                    Custom lists
                  </DropdownMenuLink>
                </Link>
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
