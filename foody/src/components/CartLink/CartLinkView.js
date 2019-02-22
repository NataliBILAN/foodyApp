import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartLinkView = ({ amount }) => (
  <CartLinkWrap>
    <Link to="/cart">
      <img src="./images/shopping-cart.svg" alt="cart" width="100" />
      <Amount>{amount}</Amount>
    </Link>
  </CartLinkWrap>
);

const CartLinkWrap = styled.div`
  position: relative;
  margin-right: 50px;
`;

const Amount = styled.span`
  position: absolute;
  bottom: 26px;
  right: -20px;
  background-color: #e91e63;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  font-size: 32px;
`;

export default CartLinkView;
