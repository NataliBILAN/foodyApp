import React from 'react';
import styled from 'styled-components';

import MenuItemContainer from '../modules/menu/MenuItem/MenuItemContainer';

const DishPage = () => (
  <DishPageWrap>
    <MenuItemContainer />
  </DishPageWrap>
);

const DishPageWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default DishPage;
