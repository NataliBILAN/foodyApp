import React from 'react';
import styled from 'styled-components';

import AllDishes from '../modules/menu/AllDishes/AllDishesContainer';
import CategorySelector from '../modules/menu/CategorySelector/CategorySelectorContainer';
import { PageTitle } from '../ui/PageTitle';

const MenuPage = () => (
  <MenuPageWrap>
    <PageTitle>Our menu</PageTitle>
    <CategorySelector />
    <AllDishes />
  </MenuPageWrap>
);

const MenuPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default MenuPage;
