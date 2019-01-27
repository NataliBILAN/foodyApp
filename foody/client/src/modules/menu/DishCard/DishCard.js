import React, { Fragment } from 'react';
import s from './DishCard.module.css';

const DishCard = ({ name, description, image, price }) => (
  <Fragment>
    <div className={s.wrapper}>
      <img src={image} alt={name} className={s.image} />
    </div>

    <p>{name}</p>
    <p>{description}</p>
    <p>Price: {price}</p>
    {/* <button type="button" onClick={addToCart}>
      Add to cart
    </button> */}
  </Fragment>
);

export default DishCard;
