import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';
import styled from 'styled-components';

const ToggleIcon = styled.svg`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    fill: #28a745;
  }
`;

type ToggleSortingSearchProps = {
  title: string;
  keyType: string;
  ascValue: string;
  descValue: string;
};

const ToggleSortingSearch: FC<ToggleSortingSearchProps> = ({
  title,
  keyType,
  ascValue,
  descValue,
}) => {
  const location = useLocation();
  const history = useHistory();
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setIsToggle(location.search.includes(ascValue));
  }, [location.search]);

  const onToggleHandler = (sortValue: string) => {
    const paramObj = parseGetParamsStr(location.search);
    history.push({
      pathname: location.pathname,
      search: stringifyGetParamsObj({ ...paramObj, [keyType]: sortValue }),
    });
  };

  return (
    <Row className='align-items-center created-toggle'>
      <Col className='p-0'>{title}</Col>
      <Col className='col-auto pl-1'>
        {isToggle ? (
          <ToggleIcon
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            className='created-toggle__arrow'
            onClick={() => onToggleHandler(descValue)}
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
          </ToggleIcon>
        ) : (
          <ToggleIcon
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            className='created-toggle__arrow'
            onClick={() => onToggleHandler(ascValue)}
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
          </ToggleIcon>
        )}
      </Col>
    </Row>
  );
};

export default ToggleSortingSearch;
