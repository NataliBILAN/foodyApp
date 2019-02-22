import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNav = () => (
  <Nav>
    <Item>
      <StyledLink to="/signup">Sing up</StyledLink>
    </Item>
    <Item>
      <StyledLink to="/signin">Sing in</StyledLink>
    </Item>
  </Nav>
);

const Nav = styled.ul`
  display: flex;
  list-style: none;
  align-items:center;
`;

const Item = styled.li`
  margin-right: 20px;

`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #5c007a;
  font-size: 24px;
  text-transform: uppercase;
  border: 2px solid transparent;
  padding: 5px;
  transition: all 200ms ease;
  :hover {
    color: #f06292;
    border: 2px solid white;
    border-radius: 5px;
    transition: all 200ms ease;
  }
`;

export default AuthNav;
