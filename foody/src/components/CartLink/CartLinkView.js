import React from 'react';
import { Link } from 'react-router-dom';
import s from './CartLink.module.css';

const CartLinkView = ({ amount }) => (
  <div className={s.wrapper}>
    <Link to="/cart">
      <img src="./images/shopping-cart.svg" alt="cart" width="100" />
      <span className={s.amount}>{amount}</span>
    </Link>
  </div>
);
export default CartLinkView;
