import axios from 'axios';
import actions from './categoriesAction';

const fetchCategories = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get('http://localhost:3000/categories')
    .then(({ data }) => dispatch(actions.fetchSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchCategories };
