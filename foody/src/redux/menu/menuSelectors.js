import { createSelector } from 'reselect';

const getAllMenu = state => state.menu.items;

const getLoading = state => state.menu.loading;

// const getMenuItemById = (state, id) => {
//   const menu = getAllMenu(state);
//   return menu.find(item => item.id === Number(id));
// };

// [(state, id) => id, getAllPosts],
//   (id, posts) => posts.find(post => post.id === id),

const getMenuItemById = createSelector(
  [(state, id) => id, getAllMenu],
  (id, menu) => menu.find(item => item.id === Number(id)),
);

const getMenuByCategories = (state, category) => {
  const menu = getAllMenu(state);
  return menu.filter(item => item.category === category);
};

export default { getAllMenu, getLoading, getMenuItemById, getMenuByCategories };
