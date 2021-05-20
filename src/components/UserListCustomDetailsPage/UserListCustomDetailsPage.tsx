import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RedirectByNumberId from '../RedirectByNumberId/RedirectByNumberId';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCustomListDetailsEffect,
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
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { parseGetParamsStr, stringifyGetParamsObj } from '../../utils/utils';

type UserListCustomDetailsPageParams = {
  id: string;
};

const UserListCustomDetailsPage = () => {
  const [localLoading, setLocalLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { id: list_id } = useParams<UserListCustomDetailsPageParams>();
  const {
    isDetailsLoading,
    isRemoveMovieLoading: isDeletingLoading,
    isClearListLoading,
  } = useSelector(selectCustomListDetailsLoading);
  const { items: customListMovies } = useSelector(selectCustomListDetailsData);
  const nameList = useSelector(selectCustomLists).find(
    (list) => list.id === +list_id
  )?.name;
  const manipulationMovieId = useSelector(selectManipulationMovieId);
  const dispatch = useDispatch();

  const paramsObj = parseGetParamsStr(location.search);
  const currentPage = +paramsObj.page || 1;
  const totalPages = Math.ceil(customListMovies.length / 20);
  const moviesToShow = [...customListMovies]
    .reverse()
    .slice(20 * (currentPage - 1), 20 * currentPage);
  const isCorrectCurrentPage =
    !isNaN(currentPage) && currentPage > 0 && currentPage <= totalPages;

  useEffect(() => {
    if (!isNaN(+list_id) && +list_id > 0) {
      dispatch(loadCustomListDetailsData(+list_id));
    }
  }, []);

  useEffect(() => {
    isDetailsLoading && setLocalLoading(false);
  }, [isDetailsLoading]);

  const onDeleteMovie = async (movie_id: number) => {
    const isSuccess = await dispatch(
      deleteMovieCustomListEffect(+list_id, movie_id)
    );

    if (
      ((isSuccess as unknown) as boolean) &&
      currentPage === totalPages &&
      customListMovies.length % 20 === 1
    ) {
      history.replace({
        pathname: location.pathname,
        search: stringifyGetParamsObj({ page: String(totalPages - 1) }),
      });
    }
  };

  const onShowConfirmModal = () => {
    setModalShow(true);
  };

  const onHideConfirmModal = () => {
    setModalShow(false);
  };

  const onConfirmClearCustomList = () => {
    onHideConfirmModal();
    dispatch(clearCustomListDetailsEffect(+list_id));
  };

  const onChangePage = (page: number) => {
    if (currentPage !== page) {
      history.push({
        pathname: location.pathname,
        search: stringifyGetParamsObj({ page: String(page) }),
      });
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <RedirectByNumberId id={list_id}>
      <Container className='pt-2 pb-2'>
        {nameList && (
          <Row className='align-items-center'>
            <Col>
              <h1 className='font-weight-bold'>{nameList}</h1>
            </Col>
            {!!customListMovies.length &&
              !isDetailsLoading &&
              !localLoading &&
              isCorrectCurrentPage && (
                <Col className='col-auto'>
                  <ButtonLoad
                    isLoading={isClearListLoading}
                    textValue='Clear list'
                    handleOnClick={onShowConfirmModal}
                    style={{ minWidth: '6rem', minHeight: 38 }}
                  />
                </Col>
              )}
          </Row>
        )}
        <Loader isLoading={isDetailsLoading || localLoading}>
          <Row>
            <Col className='p-0'>
              {customListMovies.length && isCorrectCurrentPage ? (
                <MovieList
                  currentPage={+currentPage}
                  totalPages={totalPages}
                  movies={moviesToShow}
                  onChangePage={onChangePage}
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
      <ConfirmModal
        show={modalShow}
        onConfirm={onConfirmClearCustomList}
        onHide={onHideConfirmModal}
      />
    </RedirectByNumberId>
  );
};

export default UserListCustomDetailsPage;
