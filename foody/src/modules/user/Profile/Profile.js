import React from 'react';
import styled from 'styled-components';

const Profile = ({ name, phone, email }) => (
  <ProfileWrap>
    <ImageWrap>
      <ProfileImage src="./images/lisa.png" alt="user avatar" />
    </ImageWrap>
    <InfoWrap>
      <Info>
        <b>User name:</b> {name}
      </Info>
      <Info>
        Contact Information:
      </Info>
      <Info>
        Phone: {phone}
      </Info>
      <Info>
        e-mail:{email}
      </Info>
    </InfoWrap>
  </ProfileWrap>
);

const ProfileWrap = styled.div`
  display: flex;
`;

const ImageWrap = styled.div`
  width: 250px; 
`;

const InfoWrap = styled.div`
  display:flex;
  flex-direction:column;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

const Info = styled.p`
  padding: 15px;
`;

export default Profile;
