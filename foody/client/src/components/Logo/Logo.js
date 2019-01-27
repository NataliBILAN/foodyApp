import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import s from './Logo.module.css';

const Logo = ({ img }) => (
  <Link to={routes.HOME}>
    <div className={s.logo}>
      <img className={s.logo_img} src={img} alt="app logo" />
    </div>
  </Link>
);
export default Logo;
