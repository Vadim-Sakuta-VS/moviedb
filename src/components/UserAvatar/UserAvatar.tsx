import React, { FC } from 'react';
import { Col, Image } from 'react-bootstrap';
import { ApiMovies } from '../../api/apiMovies';
import { ImgPathType } from '../../types/common';
import styled from 'styled-components';

const StyledUserAvatar = styled(Col)`
  max-width: 130px;
`;

const UserAvatarName = styled.p`
  width: 100%;
  word-wrap: break-word;
`;

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
    <StyledUserAvatar className='col-auto d-flex flex-column'>
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
      <UserAvatarName className='m-0 text-center'>{username}</UserAvatarName>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
