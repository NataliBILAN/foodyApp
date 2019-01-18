const getAllMenu = state => state.menu.items;

const getLoading = state => state.menu.loading;

const getMenuItemById = (state, id) => {
  const menu = getAllMenu(state);
  return menu.find(item => item.id === Number(id));
};

const getMenuByCategories = (state, category) => {
  const menu = getAllMenu(state);
  return menu.filter(item => item.category === category);
};

export default { getAllMenu, getLoading, getMenuItemById, getMenuByCategories };
