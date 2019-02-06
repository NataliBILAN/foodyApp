import React from 'react';
import Profile from '../../modules/user/Profile/Profile';
import { PageTitle } from '../../ui/PageTitle';

const Account = ({ user }) => (
  <div>
    <PageTitle>AccountPage</PageTitle>
    <Profile
      name={user.name}
      email={user.email}
      phone="89 963 254 24"
    />
  </div>
);
export default Account;
