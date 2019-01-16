import React from 'react';

const Account = ({ image, name, phone, email }) => (
  <div>
    <div>
      <img src={image} alt="user avatar" />
    </div>
    <p>User name: {name}</p>
    <p>Contact Information:</p>
    <p>phone: {phone}</p>
    <p>e-mail: {email}</p>
  </div>
);
export default Account;
