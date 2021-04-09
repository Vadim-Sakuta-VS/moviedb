import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ApiMovies } from '../../api/apiMovies';

const UserAvatar = ({ username, avatarPath }) => {
  const imageSrc =
    avatarPath && avatarPath.includes('http')
      ? avatarPath.slice(1)
      : ApiMovies.getImage(avatarPath);

  return (
    <Col className='col-auto d-flex flex-column align-items-center'>
      <Image
        width={100}
        height={100}
        src={imageSrc}
        roundedCircle
        className='mb-1'
      />
      <p className='m-0'>{username}</p>
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
