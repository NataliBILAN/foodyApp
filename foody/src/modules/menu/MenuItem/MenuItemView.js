import React from 'react';
import s from './MenuItem.module.css';
import { Button } from '../../../ui/Button';

const MenuItemView = ({ item = {}, addToCart, onGoBack }) => (
  <div className={s.card}>
    <div className={s.wrapper}>
      <img src={item.image} alt={item.name} className={s.image} />
    </div>
    <h3 className={s.title}>{item.name}</h3>
    <p>{item.description}</p>
    <p>Ингридиенты: {item.ingredients}</p>
    <p>Категория: {item.category}</p>
    <p>Цена: {item.price}</p>
    <Button onClick={() => addToCart(item.id)}>Add to cart</Button>
    <Button onClick={onGoBack}>Back to menu</Button>
  </div>
);

export default MenuItemView;
