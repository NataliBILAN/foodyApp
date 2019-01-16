const getAllMenu = state => state.menu.items;

const getLoading = state => state.menu.loading;

const getMenuItemById = (state, id) => {
  const menu = getAllMenu(state);
  return menu.find(item => item.id === id);
};

export default { getAllMenu, getLoading, getMenuItemById };
