import React from 'react';
import styled from 'styled-components';

import { Button } from '../../../ui/Button';
import { PageTitle } from '../../../ui/PageTitle';

const MenuItemView = ({ item = {}, addToCart, onGoBack }) => (
  <>
    <ImageWrap>
      <DishImage src={item.image} alt={item.name} />
    </ImageWrap>
    <PageTitle>{item.name}</PageTitle>
    <MenuItemContent>{item.description}</MenuItemContent>
    <MenuItemContent>Ингридиенты: {item.ingredients}</MenuItemContent>
    <MenuItemContent>Категория: {item.category}</MenuItemContent>
    <MenuItemContent>Цена: {item.price}</MenuItemContent>
    <AddButton onClick={() => addToCart(item.id)}>Add to cart</AddButton>
    <Button onClick={onGoBack}>Back to menu</Button>
  </>
);

const ImageWrap = styled.div`
 width: 400px;
`;

const DishImage = styled.img`
  width: 100%; 
  margin-bottom: 30px; 
`;

const MenuItemContent = styled.p`
  line-height: 1.5;
  margin-bottom: 15px;
`;

const AddButton = styled(Button)`
  margin-right: 40px;
`;

export default MenuItemView;
