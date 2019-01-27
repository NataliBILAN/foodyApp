import React from 'react';
import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import s from './AppHeader.module.css';
import CartLink from '../CartLink/CartLinkContainer';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import AuthNav from '../../modules/user/AuthNav/AuthNav';

const AppHeader = () => (
  <header className={s.header}>
    <Logo img={appLogo} />
    <Navigation items={navItems} />
    <CartLink />
    <AuthNav />
    <UserMenu name="Lisa Simpson" />
  </header>
);

export default AppHeader;
