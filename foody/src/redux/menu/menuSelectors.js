import { createSelector } from 'reselect';

export const getLoading = state => state.menu.loading;

const getProductIds = state => state.menu.products;

// const getCategory = state => state.category;
const getProductsEntities = state => state.entities.products;

// export const getMenuItemById = (state, id) => {
//   const productEntities = getProductsEntities(state);
//   return productEntities[Number(id)];
// };

export const getMenuItemById = createSelector(
  [(state, id) => id, getProductsEntities],
  (id, productEntities) => productEntities[Number(id)],
);

export const getProducts = createSelector(
  [getProductIds, getProductsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);
// export const getMenuByCategories = (state, category) => {
//   const menu = getProducts(state);
//   return menu.filter(item => item.category === category);
// };
export const getMenuByCategories = createSelector(
  [(state, category) => category, getProductIds],
  (category, menu) => menu.filter(item => item.category === category),
);
