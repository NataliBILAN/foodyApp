import React from 'react';
import AllDishesContainer from '../../modules/menu/AllDishes/AllDishesContainer';
import CategorySelectorContainer from '../../modules/menu/CategorySelector/CategorySelectorContainer';
import { PageTitle } from '../../ui/PageTitle';

const MenuPage = () => (
  <div>
    <PageTitle>Our menu</PageTitle>
    <CategorySelectorContainer />
    <AllDishesContainer />
  </div>
);
export default MenuPage;
