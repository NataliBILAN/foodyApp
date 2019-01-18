import React from 'react';
import Account from '../modules/user/Account/Account';
import image from '../modules/user/assets/avatar.jpeg';

const AccountPage = () => (
  <div>
    <h2>AccountPage</h2>
    <Account
      image={image}
      name="Homer Simpson"
      email="homersimpson@gmail"
      phone="89 963 254 24"
    />
  </div>
);
export default AccountPage;
