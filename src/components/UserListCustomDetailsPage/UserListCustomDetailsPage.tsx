import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
import { stringifyGetParamsObj } from '../../utils/utils';
import { useCustomRoute } from '../../hooks/useCustomRoute';

const UserListCustomDetailsPage = () => {
  const [localLoading, setLocalLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const { currentPage, onChangePage, router } = useCustomRoute({});
  const list_id = +router.query.id!;
  const {
    isDetailsLoading,
    isRemoveMovieLoading: isDeletingLoading,
    isClearListLoading,
  } = useSelector(selectCustomListDetailsLoading);
  const { items: customListMovies } = useSelector(selectCustomListDetailsData);
  const nameList = useSelector(selectCustomLists).find(
    (list) => list.id === +list_id
  )?.name;
  const customListsLength = useSelector(selectCustomLists).length;
  const manipulationMovieId = useSelector(selectManipulationMovieId);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(customListMovies.length / 20);
  const moviesToShow = [...customListMovies]
    .reverse()
    .slice(20 * (currentPage - 1), 20 * currentPage);
  const isCorrectCurrentPage =
    !isNaN(currentPage) && currentPage > 0 && currentPage <= totalPages;

  useEffect(() => {
    dispatch(loadCustomListDetailsData(+list_id));
  }, [customListsLength]);

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
      router.replace({
        pathname: router.pathname,
        search: stringifyGetParamsObj({
          id: String(list_id),
          page: String(totalPages - 1),
        }),
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

  return (
    <>
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
    </>
  );
};

export default UserListCustomDetailsPage;
