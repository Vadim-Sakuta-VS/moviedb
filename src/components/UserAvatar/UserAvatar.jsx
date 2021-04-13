import React from 'react';
import './UserAvatar.scss';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ApiMovies } from '../../api/apiMovies';

const UserAvatar = ({ username, avatarPath }) => {
  const imageSrc =
    avatarPath && avatarPath.includes('http')
      ? avatarPath.slice(1)
      : ApiMovies.getImage(avatarPath);

  return (
    <Col className='user-avatar col-auto d-flex flex-column'>
      <Image
        width={100}
        height={100}
        src={imageSrc}
        roundedCircle
        className='mb-1'
      />
      <p className='m-0 text-center'>{username}</p>
    </Col>
  );
};

UserAvatar.propTypes = {
  username: PropTypes.string.isRequired,
  avatarPath: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default UserAvatar;
