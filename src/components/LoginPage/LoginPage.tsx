import React, { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { withLinkWrapper } from '../HOC/withLinkWrapper';
import LoginForm from '../LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectStatusMessage,
  selectUserAuthStatus,
} from '../../store/userAuth/selectors';
import { Redirect, useLocation } from 'react-router-dom';
import { loginUser } from '../../store/userAuth/effects';
import { IUserParam } from '../../types/params';

interface LocationParams {
  from: Location;
}

const LoginPage: FC = () => {
  const { state } = useLocation<LocationParams>();
  const isAuth = useSelector(selectUserAuthStatus);
  const isAuthLoading = useSelector(selectAuthLoading);
  const statusMessage = useSelector(selectStatusMessage);
  const dispatch = useDispatch();

  if (isAuth) {
    const pathname = state?.from?.pathname;
    const search = state?.from?.search;
    return (
      <Redirect to={{ pathname: pathname || '/', search: search || '' }} />
    );
  }

  const onSubmitHandler = (user: IUserParam) => {
    dispatch(loginUser(user));
  };

  return (
    <Container className='pt-2 pb-2'>
      <Row style={{ marginBottom: '200px' }}>
        <Col>
          {withLinkWrapper(
            '/',
            <Image
              width={120}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fox_Movies_%28Asia%29_logo.svg/1280px-Fox_Movies_%28Asia%29_logo.svg.png'
            />
          )}
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col style={{ maxWidth: 500 }}>
          <LoginForm
            onSubmit={onSubmitHandler}
            isLoading={isAuthLoading}
            error_message={statusMessage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
