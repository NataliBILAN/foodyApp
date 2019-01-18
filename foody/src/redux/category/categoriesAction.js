import types from './categoriesActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = categories => ({
  type: types.FETCH_SUCCESS,
  payload: categories,
});
const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { fetchRequest, fetchSuccess, fetchError };
