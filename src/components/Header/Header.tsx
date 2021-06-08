import React, { FC, useEffect, useRef, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';
import UserAuth from '../UserAuth/UserAuth';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 10vh;
  background-color: #fff;
  border-bottom: 1px solid #212121;
`;

type StyledFixedHeaderProps = {
  isVisible: boolean;
};

const StyledFixedHeader = styled.header<StyledFixedHeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px 1px #212121;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-120%)'};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: 0.3s;
  z-index: 11;
`;

const Header: FC = () => {
  const [isFixedVisible, setIsFixedVisible] = useState<boolean>(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerHeight = parseFloat(
      getComputedStyle(headerRef.current!).height
    );
    let pageYOffset = window.pageYOffset;

    function scrollHandler() {
      const nextPageYOffset = window.pageYOffset;

      if (
        pageYOffset > headerHeight * 3 &&
        nextPageYOffset < pageYOffset &&
        nextPageYOffset !== 0
      ) {
        setIsFixedVisible(true);
      } else {
        setIsFixedVisible(false);
      }

      pageYOffset = nextPageYOffset;
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <StyledHeader className='d-flex align-items-center p-1'>
        <Container>
          <Row className='align-items-center'>
            <Col>
              <Link href='/'>
                <a>
                  <Image width={120} src='/images/logo.png' alt='Logo' />
                </a>
              </Link>
            </Col>
            <Col className='col-auto'>
              <Row className='flex-column flex-sm-row align-items-sm-center'>
                <Col className='order-1 order-sm-0'>
                  <Link href='/search'>
                    <a>Search</a>
                  </Link>
                </Col>
                <Col className='mb-1 mb-sm-0'>
                  <UserAuth />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
      <StyledFixedHeader
        ref={headerRef}
        className='d-flex align-items-center p-1'
        isVisible={isFixedVisible}
      >
        <Container>
          <Row className='align-items-center'>
            <Col>
              <Link href='/'>
                <a>
                  <Image width={120} src='/images/logo.png' alt='Logo' />
                </a>
              </Link>
            </Col>
            <Col className='col-auto'>
              <Row className='flex-column flex-sm-row align-items-sm-center'>
                <Col className='order-1 order-sm-0'>
                  <Link href='/search'>
                    <a>Search</a>
                  </Link>
                </Col>
                <Col className='mb-1 mb-sm-0'>
                  <UserAuth />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledFixedHeader>
    </>
  );
};

export default Header;
