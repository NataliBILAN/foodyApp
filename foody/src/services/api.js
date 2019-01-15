import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};
export const addNewDish = async dish => {
  const response = await axios.post(`/menu`, dish);
  return response.data;
};

export const getAllOrders = async () => {
  const response = await axios.get('/orders');
  return response.data;
};
