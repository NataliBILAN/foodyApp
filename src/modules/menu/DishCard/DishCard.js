import React, { Fragment } from 'react';
import styled from 'styled-components';

const DishCard = ({ name, image, price }) => (
  <Fragment>
    <DishCardImage src={image} alt={name} />
    <DishName>{name}</DishName>
    <DishPrice>Price: {price}</DishPrice>
  </Fragment>
);

const DishCardImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

const DishName = styled.p`
  color: #5c007a;
  font-weight: 700;
  margin-bottom: 15px;
`;

const DishPrice = styled.p`
  margin-bottom: 15px;
`;

export default DishCard;
