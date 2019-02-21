import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import DishCard from '../DishCard/DishCard';
import { Button } from '../../../ui/Button'

const AllDishesView = ({ menu = [], match, location, addToCart }) => (
  <>
    <Menu>
      {menu.map(dish => (
        <MenuItem key={dish.id}>
          <Link
            to={{
              pathname: `${match.url}/${dish.id}`,
              state: { from: location },
            }}
          >
            <DishCard
              image={dish.image}
              alt={dish.name}
              name={dish.name}
              price={dish.price}
            />
          </Link>
          <Button
            type="button"
            onClick={() => addToCart(dish.id)}
          >
            Add to cart
          </Button>
        </MenuItem>
      ))}
    </Menu>
  </>
);

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MenuItem = styled.li`
  flex-basis: 250px;
  margin-right: 25px;
  margin-bottom: 20px;
  border: 1px solid #000;
  padding: 5px;
`;

export default withRouter(AllDishesView);
