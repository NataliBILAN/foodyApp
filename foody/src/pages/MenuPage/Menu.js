import React from 'react';
import AllDishesContainer from '../../modules/menu/AllDishes/AllDishesContainer';
import CategorySelectorContainer from '../../modules/menu/CategorySelector/CategorySelectorContainer';
import s from './Menu.module.css';

const MenuPage = () => (
  <div>
    <h2 className={s.title}>Our menu</h2>
    <CategorySelectorContainer />
    <AllDishesContainer />
  </div>
);
export default MenuPage;
