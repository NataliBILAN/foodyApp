import React from 'react';
import s from './Account.module.css';

const Account = ({ image, name, phone, email }) => (
  <div className={s.wrapper}>
    <div className={s.info}>
      <div>
        <img src={image} alt="user avatar" />
      </div>
      <p>User name: {name}</p>
      <p>Contact Information:</p>
      <p>phone: {phone}</p>
      <p>e-mail: {email}</p>
    </div>
    <div className={s.update}>
      <h2>Update your data</h2>
    </div>
  </div>
);
export default Account;
