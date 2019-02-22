import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import CartLink from '../CartLink/CartLinkContainer';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import AuthNav from '../../modules/user/AuthNav/AuthNav';
import { isAuthenticated, getUser } from '../../redux/auth/authSelectors';

const AppHeader = ({ isAuthenticated, user }) => (
  <StickyHeader
    header={
      <Header>
        <Logo img={appLogo} />
        <Navigation items={navItems} />
        <CartLink />
        {isAuthenticated ? <UserMenu name={user.name} /> : <AuthNav />}
      </Header>
    }
  />
);

const Header = styled.header`
  display: flex;
  padding: 30px 40px 30px 30px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #b2ebf2;
`;


const mstp = state => ({
  isAuthenticated: isAuthenticated(state),
  user: getUser(state),
});

export default connect(
  mstp,
  null,
)(AppHeader);
