import React, { useEffect } from 'react';
import { Accordion, Container, Row, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGenresData,
} from '../../store/genres/selectors';
import { loadGenres } from '../../store/genres/effects';
import { useHistory, useLocation } from 'react-router-dom';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';
import FilterForm from '../FilterForm/FilterForm';

const MovieListFilterPage = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const genres = useSelector(selectGenresData);
  const dispatch = useDispatch();

  // const parseSearchStr = () => {
  //   const paramObj = parseGetParamsStr(search);
  //
  //   console.log(paramObj);
  // };
  //
  useEffect(() => {
    dispatch(loadGenres());
  }, []);
  //
  // useEffect(() => {
  //   console.log('effect search');
  // }, [search]);
  //
  const onSubmit = (data) => {
    console.log('submit');
    history.replace({ pathname, search: '?with_genres=1|12|3' });
  };

  const paramObj = parseGetParamsStr(search);
  Object.entries(paramObj).forEach(([key, value]) => {
    let arrValues = paramObj[key].split('|');
    // if (arrValues.length > 1) {
    paramObj[key] = arrValues;
    // }
  });

  console.log(paramObj);

  const genresOptions = genres.map((g) => ({ value: g.id, label: g.name }));
  const defaultGenres = genres.reduce((acc, g) => {
    console.log(g);
    if (paramObj.with_genres.includes(g.id.toString())) {
      return [...acc, { value: g.id, label: g.name }];
    }
    return acc;
  }, []);
  console.log(defaultGenres);

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <Accordion defaultActiveKey='0'>
            <Row className='mb-1'>
              <Col>
                <Accordion.Toggle
                  as={Button}
                  variant='light'
                  className='d-flex align-items-center'
                  eventKey='0'
                >
                  <span className='mr-1'>Filters</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 0 24 24'
                    width='24px'
                    fill='#000000'
                  >
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' />
                  </svg>
                </Accordion.Toggle>
              </Col>
            </Row>
            <Row>
              <Col className=''>
                <Accordion.Collapse eventKey='0'>
                  <FilterForm
                    onSubmit={onSubmit}
                    defaultValues={{ with_genres: defaultGenres }}
                    values={{
                      with_genres: genresOptions,
                    }}
                  />
                </Accordion.Collapse>
              </Col>
            </Row>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieListFilterPage;
