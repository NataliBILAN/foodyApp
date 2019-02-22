import { combineReducers } from 'redux';
import menuReducer from './menu/menuReducer';
import categoriesReducer from './category/categoriesReducer';
import cartReducer from './cart/cartReducer';
import entitiesReducer from './entitiesReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  menu: menuReducer,
  entities: entitiesReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  session: authReducer,
});
