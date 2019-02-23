import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'; //logOnlyInProduction  developmentOnly
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// import rootReducer from '../redux/rootReducer';
import authReducer from '../redux/auth/authReducer';
import cartReducer from '../redux/cart/cartReducer';
import categoriesReducer from '../redux/category/categoriesReducer';
import entitiesReducer from '../redux/entitiesReducer';
import menuReducer from '../redux/menu/menuReducer';

const rootPersistConfig = {
	key: 'root',
	storage,
	blacklist: ['session'],
};

const authPersistConfig = {
	key: 'session',
	storage: storage,
	whitelist: ['token'],
};

const rootReducer = combineReducers({
	session: persistReducer(authPersistConfig, authReducer),
	menu: menuReducer,
	entities: entitiesReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const middleWare = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleWare);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
