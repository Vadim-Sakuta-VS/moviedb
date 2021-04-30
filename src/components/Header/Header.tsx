import React, { FC, useEffect, useRef, useState } from 'react';
import './Header.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import UserAuth from '../UserAuth/UserAuth';

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

  const headerFixedClasses = clsx(
    'header-fixed',
    'p-2',
    isFixedVisible && 'header-fixed--visible'
  );

  return (
    <>
      <header ref={headerRef} className='header p-1'>
        <Container>
          <Row className='align-items-center'>
            <Col>
              <Link to='/'>
                <Image
                  width={120}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fox_Movies_%28Asia%29_logo.svg/1280px-Fox_Movies_%28Asia%29_logo.svg.png'
                />
              </Link>
            </Col>
            <Col className='col-auto'>
              <Link to='/companies' className='header__link'>
                Companies
              </Link>
            </Col>
            <Col className='col-auto'>
              <UserAuth />
            </Col>
          </Row>
        </Container>
      </header>
      <header ref={headerRef} className={headerFixedClasses}>
        <Container>
          <Row className='align-items-center'>
            <Col>
              <Link to='/'>
                <Image
                  width={120}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fox_Movies_%28Asia%29_logo.svg/1280px-Fox_Movies_%28Asia%29_logo.svg.png'
                />
              </Link>
            </Col>
            <Col className='col-auto'>
              <Link to='/companies' className='header__link'>
                Companies
              </Link>
            </Col>
            <Col className='col-auto'>
              <UserAuth />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
