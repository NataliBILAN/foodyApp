import React from 'react';
import { NavLink } from 'react-router-dom';
import userNav from '../../../configs/user-nav';
import s from './Dropdown.module.css';
import { Button } from '../../../ui/Button';

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
    <Button>Logout</Button>
  </div>
);

export default Dropdown;
