import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUserDataDetails } from '../../store/userAuth/selectors';
import UserAvatar from '../UserAvatar/UserAvatar';
import { MovieDetailsRow } from '../MovieDetails/MovieDetailsRow';

const ProfilePage: FC = () => {
  const user = useSelector(selectUserDataDetails);

  return (
    <Container className='pt-2 pb-2'>
      <Row>
        <Col>
          <h1 className='font-weight-bold'>Your profile</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='col-auto'>
          <UserAvatar
            username={user.username}
            avatarPath={user.avatar.tmdb.avatar_path}
          />
        </Col>
        <Col className='col-auto'>
          <MovieDetailsRow title='Username' value={user.username} />
          <MovieDetailsRow title='Name' value={user.name || '---'} />
          <MovieDetailsRow
            title='Include adult'
            value={user.include_adult ? 'Yes' : 'No'}
          />
          <MovieDetailsRow title='Default Language' value={user.iso_639_1} />
          <MovieDetailsRow title='Country' value={user.iso_3166_1} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
