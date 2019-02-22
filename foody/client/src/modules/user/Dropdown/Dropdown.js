import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import userNav from '../../../configs/user-nav';
import { Button } from '../../../ui/Button';

const Dropdown = ({ signOut }) => (
  <DropdownWrap>
    <DropdownMenu>
      {userNav.map(item => (
        <DropdownMenuItem key={item.name}>
          <StyledNavLink to={item.path}>
            {item.name}
          </StyledNavLink>
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
    <Button onClick={signOut}>Logout</Button>
  </DropdownWrap>
);

const DropdownWrap = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffe6e6;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const DropdownMenuItem = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  color: #5c007a;
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
&:hover{
    color: #f06292;
  }
`;

export default Dropdown;
