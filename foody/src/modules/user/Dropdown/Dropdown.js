import React from 'react';
import { NavLink } from 'react-router-dom';
import userNav from '../../../configs/user-nav';
import s from './Dropdown.module.css';

const Dropdown = () => (
  <div className={s.dropdown}>
    <ul className={s.user_menu}>
      {userNav.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} className={s.menu_item}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
    <button type="button" className={s.button}>
      Logout
    </button>
  </div>
);

export default Dropdown;
