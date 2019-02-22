import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Navigation = ({ items = [] }) => (
  <Nav>
    {items.map(item => (
      <li key={item.name}>
        <StyledNavLink
          to={item.path}
        // activeClassName="active"
        >
          {item.name}
        </StyledNavLink>
      </li>
    ))}
  </Nav>
);

const Nav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-right: 20px;
`;

const StyledNavLink = styled(NavLink)`
text-transform:uppercase;
text-decoration:none;
font-family: 'Patrick Hand', cursive;
font-size: 30px;
margin-right: 20px;

&:hover{
  color: #f06292;
}
`
// &: active{
// color: #ff9800;
// text - decoration: underline;
// };


export default Navigation;
