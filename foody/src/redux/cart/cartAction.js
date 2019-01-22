import { actionTypes } from './cartActionTypes';

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const incrementAmount = id => ({
  type: actionTypes.INCREMENT_AMOUNT,
  payload: {
    id,
  },
});

// /???
export const decrementAmount = id => ({
  type: actionTypes.DECREMENT_AMOUNT,
  payload: {
    id,
  },
});
// export default { addToCart, removeFromCart };
