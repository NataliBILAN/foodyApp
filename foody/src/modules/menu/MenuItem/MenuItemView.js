import React from 'react';
import s from './MenuItem.module.css';

const MenuItemView = ({ item = {}, onGoBack }) => (
  <div className={s.card}>
    <div className={s.wrapper}>
      <img src={item.image} alt={item.name} className={s.image} />
    </div>
    <h3 className={s.title}>{item.name}</h3>
    <p>{item.description}</p>
    <p>Ингридиенты: {item.ingredients}</p>
    <p>Категория: {item.category}</p>
    <p>Цена: {item.price}</p>
    <button type="button" onClick={onGoBack} className={s.button}>
      Back to menu
    </button>
  </div>
);

export default MenuItemView;
