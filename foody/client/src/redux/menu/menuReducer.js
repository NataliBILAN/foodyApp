import { combineReducers } from 'redux';
import types from './menuActionTypes';

function productsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.ids.products;

    default:
      return state;
  }
};

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
};

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
