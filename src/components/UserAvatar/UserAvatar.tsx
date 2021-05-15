import React, { FC } from 'react';
import './UserAvatar.scss';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';

interface UserAvatarProps {
  username: string;
  avatarPath: ImgPathType;
}

const UserAvatar: FC<UserAvatarProps> = ({ username, avatarPath }) => {
  const imageSrc =
    avatarPath && avatarPath.includes('http')
      ? avatarPath.slice(1)
      : ApiMovies.getImage(avatarPath);

  return (
    <Col className='user-avatar col-auto d-flex flex-column'>
      {avatarPath ? (
        <Image
          width={100}
          height={100}
          src={imageSrc}
          roundedCircle
          className='mb-1'
        />
      ) : (
        <div
          className='rounded-circle bg-success'
          style={{ width: 100, height: 100 }}
        />
      )}
      <p className='m-0 text-center user-avatar__name'>{username}</p>
    </Col>
  );
};

export default UserAvatar;
