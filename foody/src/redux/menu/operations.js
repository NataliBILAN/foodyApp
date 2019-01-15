import axios from 'axios';
import actions from './action';

// const fetchMenu = () => async dispatch => {
//   dispatch(actions.fetchRequest());

//   try {
//     const response = await axios.get('http://localhost:3000/menu');
//     dispatch(actions.fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.fetchError(error));
//   }
// };
const fetchMenu = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get('http://localhost:3000/menu')
    .then(({ data }) => dispatch(actions.fetchSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};
export default { fetchMenu };
