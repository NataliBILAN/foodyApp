import { createSelector } from 'reselect';

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
  getCartProductIds,
  ids => ids.length,
);
const getProductsEntities = state => state.entities.products;

export const getCartProducts = createSelector(
  [getCartProductIds, getCartProductAmounts, getProductsEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);
