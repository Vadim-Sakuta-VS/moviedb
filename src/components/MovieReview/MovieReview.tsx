import React, { FC, useState } from 'react';
import './MovieReview.scss';
import { Alert, Button, Col, Modal, Row } from 'react-bootstrap';
import { MovieDetailsRow } from '../MovieDetails/MovieDetailsRow';
import UserAvatar from '../UserAvatar/UserAvatar';
import { IReview } from '../../types/entities';

interface MovieReviewProps extends IReview {
  maxContentSymbolsToShow: number;
}

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

const MovieReview: FC<MovieReviewProps> = ({
  author_details,
  content,
  created_at,
  updated_at,
  maxContentSymbolsToShow,
}) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const isLongContent = content.length > maxContentSymbolsToShow;
  const dateCreated = new Date(created_at);
  const dateUpdated = new Date(updated_at);
  const localeDateCreated = dateCreated.toLocaleDateString();
  const localeDateUpdated = dateUpdated.toLocaleDateString();
  const localeTimeCreated = dateCreated.toLocaleTimeString([], timeOptions);
  const localeTimeUpdated = dateUpdated.toLocaleTimeString([], timeOptions);

  const handleShow = () => setIsShowModal(true);
  const handleClose = () => setIsShowModal(false);

  return (
    <Alert variant='secondary'>
      <Row className='review flex-column flex-md-row'>
        <Col className='d-flex justify-content-center col-md-auto p-0'>
          <UserAvatar
            username={author_details.username}
            avatarPath={author_details.avatar_path}
          />
        </Col>
        <Col>
          {author_details.rating && (
            <MovieDetailsRow title='Rating'>
              <div className='d-flex align-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='#ebcc34'
                  className='bi bi-star mr-1'
                  viewBox='0 0 16 16'
                >
                  <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
                </svg>
                {author_details.rating}
              </div>
            </MovieDetailsRow>
          )}
          <Row className='mb-3'>
            <Col className='review-text'>
              {isLongContent
                ? `${content.slice(0, maxContentSymbolsToShow)}...`
                : content}
            </Col>
          </Row>
          <Row className='justify-content-between'>
            <Col className='col-auto mb-1 font-weight-bold review-date'>
              <p className='m-0'>
                Created: {localeDateCreated} ({localeTimeCreated})
              </p>
              {created_at !== updated_at && (
                <p className='m-0'>
                  Updated: {localeDateUpdated} ({localeTimeUpdated})
                </p>
              )}
            </Col>
            {isLongContent && (
              <Col className='col-auto'>
                <Button variant='success' onClick={handleShow}>
                  Show full
                </Button>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      <Modal size='lg' show={isShowModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review from '{author_details.username}'</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </Alert>
  );
};

export default MovieReview;
