import { combineReducers } from 'redux';
import reducers from './menu/reducers';

export default combineReducers({
  menu: reducers,
});
