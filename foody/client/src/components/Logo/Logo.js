import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import styled from 'styled-components';

const Logo = ({ img }) => (
  <Link to={routes.HOME}>
    <LogoWrap>
      <StyledLogo src={img} alt="app logo" />
    </LogoWrap>
  </Link>
);

const LogoWrap = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-right: 20px;
`;

const StyledLogo = styled.img`
  width: 100%;
`;


export default Logo;
