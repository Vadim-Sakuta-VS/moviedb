import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RedirectByNumberId from '../RedirectByNumberId/RedirectByNumberId';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMovieCustomListEffect,
  loadCustomListDetailsData,
} from '../../store/customListDetails/effects';
import { selectCustomLists } from '../../store/customLists/selectors';
import Loader from '../Loader/Loader';
import {
  selectCustomListDetailsData,
  selectCustomListDetailsLoading,
  selectManipulationMovieId,
} from '../../store/customListDetails/selectors';
import MovieList from '../MovieList/MovieList';

type UserListCustomDetailsPageParams = {
  id: string;
};

const UserListCustomDetailsPage = () => {
  const { id: list_id } = useParams<UserListCustomDetailsPageParams>();
  const {
    isDetailsLoading,
    isRemoveMovieLoading: isDeletingLoading,
  } = useSelector(selectCustomListDetailsLoading);
  const { items: customListMovies } = useSelector(selectCustomListDetailsData);
  const nameList = useSelector(selectCustomLists).find(
    (list) => list.id === +list_id
  )?.name;
  const manipulationMovieId = useSelector(selectManipulationMovieId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNaN(+list_id) && +list_id > 0) {
      dispatch(loadCustomListDetailsData(+list_id));
    }
  }, []);

  const onDeleteMovie = (movie_id: number) => {
    dispatch(deleteMovieCustomListEffect(+list_id, movie_id));
  };

  return (
    <RedirectByNumberId id={list_id}>
      <Container className='pt-2 pb-2'>
        {nameList && (
          <Row>
            <Col>
              <h1 className='font-weight-bold'>{nameList}</h1>
            </Col>
          </Row>
        )}
        <Loader isLoading={isDetailsLoading}>
          <Row>
            <Col className='p-0'>
              {customListMovies.length ? (
                <MovieList
                  currentPage={1}
                  totalPages={Math.round(customListMovies.length / 20) || 1}
                  movies={customListMovies}
                  onChangePage={() => {}}
                  movieDeleteOptions={{
                    isDeletingLoading,
                    onDeleteMovie,
                    manipulationMovieId,
                  }}
                />
              ) : (
                <p className='text-center font-weight-bold text-secondary'>
                  No movies
                </p>
              )}
            </Col>
          </Row>
        </Loader>
      </Container>
    </RedirectByNumberId>
  );
};

export default UserListCustomDetailsPage;
