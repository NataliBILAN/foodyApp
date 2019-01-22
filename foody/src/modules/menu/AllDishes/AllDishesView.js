import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DishCard from '../DishCard/DishCard';
import s from './AllDishes.module.css';

const AllDishesView = ({ menu = [], match, location, addToCart }) => (
  <>
    <ul className={s.menu}>
      {menu.map(dish => (
        <li key={dish.id}>
          <Link
            to={{
              pathname: `${match.url}/${dish.id}`,
              state: { from: location },
            }}
            className={s.menu_item}
          >
            <DishCard
              image={dish.image}
              alt={dish.name}
              name={dish.name}
              price={dish.price}
              // addToCart={() => addToCart(dish.id)}
            />
          </Link>
          <button type="button" onClick={() => addToCart(dish.id)}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  </>
);
export default withRouter(AllDishesView);
