import { normalize } from 'normalizr';
import types from './menuActionTypes';
import ProductsSchema from '../utils/schema';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = products => {
  const normalizedProducts = normalize(products, [ProductsSchema]);

  return {
    type: types.FETCH_SUCCESS,
    payload: {
      ids: {
        products: Object.keys(normalizedProducts.entities.products),
      },
      entities: normalizedProducts.entities,
    },
  };
};

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { fetchRequest, fetchSuccess, fetchError };
