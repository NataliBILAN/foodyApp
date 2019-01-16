import React, { Fragment } from 'react';

const MenuItemView = ({ item = {}, match }) => (
  <Fragment>
    <img src={item.image} alt={item.name} width="400" />
    <p>{item.name}</p>
    <h3>ID: {match.params.id}</h3>
    {/* <p>{description}</p>
    <p>Ингридиенты: {ingredients}</p>
    <p>Категория: {category}</p>
    <p>Цена: {price}</p> */}
  </Fragment>
);

export default MenuItemView;

// const MenuItemView = ({
//   name,
//   description,
//   ingredients,
//   category,
//   image,
//   price,
// }) => (
//   <Fragment>
//     <img src={image} alt={name} width="400" />
//     <p>{name}</p>
//     <p>{description}</p>
//     <p>Ингридиенты: {ingredients}</p>
//     <p>Категория: {category}</p>
//     <p>Цена: {price}</p>
//   </Fragment>
// );

// export default MenuItemView;
