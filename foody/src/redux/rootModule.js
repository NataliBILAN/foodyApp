import { combineReducers } from 'redux';
import menuReducer from './menu/menuReducer';
import categoriesReducer from './category/categoriesReducer';

export default combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
});
