import React from 'react';
import s from './Profile.module.css';

const Profile = ({ name, phone, email }) => (
  <div className={s.wrapper}>
    <div className={s.info}>
      <div className={s.wrapper_image}>
        <img src="./images/lisa.png" alt="user avatar" className={s.image} />
      </div>
      <p>
        <b>User name:</b> {name}
      </p>
      <p>
        <b>Contact Information:</b>
      </p>
      <p>
        <b>phone:</b> {phone}
      </p>
      <p>
        <b>e-mail:</b> {email}
      </p>
    </div>
    <div className={s.update}>
      <h2>Update your data</h2>
    </div>
  </div>
);
export default Profile;
