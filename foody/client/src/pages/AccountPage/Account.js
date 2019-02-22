import React from 'react';
import styled from 'styled-components';

import Profile from '../../modules/user/Profile/Profile';
import { PageTitle } from '../../ui/PageTitle';

const Account = ({ user }) => (
  <AccountPageWrap>
    <PageTitle>AccountPage</PageTitle>
    <Profile
      name={user.name}
      email={user.email}
      phone="89 963 254 24"
    />
  </AccountPageWrap>
);

const AccountPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default Account;
