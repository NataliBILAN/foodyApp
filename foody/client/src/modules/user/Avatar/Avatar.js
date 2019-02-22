import React from 'react';
import styled from 'styled-components';

const Avatar = ({ image }) => (
  <AvatarWrap>
    <AvatarImage src={image} alt="user avatar" />
  </AvatarWrap >
);

const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  border: 3px solid pink;
`;

export default Avatar;
