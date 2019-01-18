import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const getAllOrders = async () => {
  const response = await axios.get('/orders');
  return response.data;
};
// const getAllOrders = () => axios.get('/orders').then(response => response.data);
export default { getAllOrders };
