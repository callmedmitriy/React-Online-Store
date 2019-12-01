import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import catalogListReducer from '../reducers/catalogList.js';
import categoriesListReducer from '../reducers/categoriesList.js';
import hitsListReducer from '../reducers/hitsList.js';
import itemReducer from '../reducers/item.js';
import cartReducer from '../reducers/cart.js';

import {
  searchHitsEpic,
  searchCategoriesEpic,
  searchItemsEpic,
  searchItemEpic,
  sendOrderEpic,
} from '../epics';

const reducer = combineReducers({
  catalog: catalogListReducer,
  categories: categoriesListReducer,
  hits: hitsListReducer,
  item: itemReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  searchItemEpic,
  searchHitsEpic,
  searchCategoriesEpic,
  searchItemsEpic,
  sendOrderEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware),
));

epicMiddleware.run(epic);

export default store;
