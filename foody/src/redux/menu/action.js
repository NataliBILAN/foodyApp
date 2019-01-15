import types from './actionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = menu => ({
  type: types.FETCH_SUCCESS,
  payload: menu,
});
const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});
const changeFilter = search => ({
  type: types.CHANGE_FILTER,
  payload: search,
});

export default { fetchRequest, fetchSuccess, fetchError, changeFilter };
