import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectStatusMessage,
  selectUserAuthStatus,
} from '../../src/store/userAuth/selectors';
import { IUserParam } from '../../src/types/params';
import { loginUser } from '../../src/store/userAuth/effects';
import { withLinkWrapper } from '../../src/components/HOC/withLinkWrapper';
import LoginForm from '../../src/components/LoginForm/LoginForm';
import { useRouter } from 'next/router';

const StyledHeader = styled.header`
  min-height: 10vh;
  margin-bottom: 20vh;
`;

const LoginFormWrapper = styled(Col)`
  max-width: 500px;
`;

const LoginPage: NextPage = () => {
  const router = useRouter();
  const isAuth = useSelector(selectUserAuthStatus);
  const isAuthLoading = useSelector(selectAuthLoading);
  const statusMessage = useSelector(selectStatusMessage);
  const dispatch = useDispatch();
  console.log(router);

  if (isAuth) {
    router.replace(router.query.asPath ? String(router.query.asPath) : '/');
    return null;
  }

  const onSubmitHandler = (user: IUserParam) => {
    dispatch(loginUser(user));
  };

  return (
    <>
      <StyledHeader className='p-1 d-flex align-items-center'>
        <Container>
          <Row className='align-items-center'>
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
        </Container>
      </StyledHeader>
      <Container className='pt-2 pb-2'>
        <Row className='justify-content-center'>
          <LoginFormWrapper>
            <LoginForm
              onSubmit={onSubmitHandler}
              isLoading={isAuthLoading}
              error_message={statusMessage}
            />
          </LoginFormWrapper>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
