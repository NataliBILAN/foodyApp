import React from 'react';
import Account from '../modules/user/Account/Account';
import { PageTitle } from '../ui/PageTitle';

const AccountPage = () => (
  <div>
    <PageTitle>AccountPage</PageTitle>
    <Account
      // image={image}
      name="Lisa Simpson"
      email="lisasimpson@gmail"
      phone="89 963 254 24"
    />
  </div>
);
export default AccountPage;
