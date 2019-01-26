import { connect } from 'react-redux';
import CartView from './CartView';
import {
  getCartProducts,
  getTotalAmount,
} from '../../redux/cart/cartSelectors';
import {
  removeFromCart,
  decrementAmount,
  incrementAmount,
} from '../../redux/cart/cartAction';

const mstp = state => ({
  products: getCartProducts(state),
  total: getTotalAmount(state),
});
const mdtp = { removeFromCart, decrementAmount, incrementAmount };

export default connect(
  mstp,
  mdtp,
)(CartView);
