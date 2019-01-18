import React from 'react';
import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import s from './AppHeader.module.css';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
// import avatar from '../../modules/user/assets/lisa.png';

const AppHeader = () => (
  <header className={s.header}>
    <Logo img={appLogo} />
    <Navigation items={navItems} />
    <UserMenu name="Homer Simpson" />
    {/* <UserMenu image={avatar} name="Lisa Simpson" /> */}
  </header>
);

export default AppHeader;
