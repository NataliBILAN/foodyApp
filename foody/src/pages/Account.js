import React from 'react';
import Account from '../modules/user/Account/Account';

const AccountPage = () => (
  <div>
    <h2>AccountPage</h2>
    <Account
      // image={image}
      name="Lisa Simpson"
      email="lisasimpson@gmail"
      phone="89 963 254 24"
    />
  </div>
);
export default AccountPage;
