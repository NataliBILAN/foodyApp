import React from 'react';
import { connect } from 'react-redux';

import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import s from './AppHeader.module.css';
import CartLink from '../CartLink/CartLinkContainer';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import AuthNav from '../../modules/user/AuthNav/AuthNav';
import { isAuthenticated, getUser } from '../../redux/auth/authSelectors';

const AppHeader = ({ isAuthenticated, user }) => (
  <header className={s.header}>
    <Logo img={appLogo} />
    <Navigation items={navItems} />
    <CartLink />
    {isAuthenticated ? <UserMenu name={user.name} /> : <AuthNav />}
  </header>
);

const mstp = state => ({
  isAuthenticated: isAuthenticated(state),
  user: getUser(state),
});

export default connect(
  mstp,
  null,
)(AppHeader);
