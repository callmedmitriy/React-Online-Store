import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import catalogListReducer from '../reducers/catalogList.js';
import categoriesListReducer from '../reducers/categoriesList.js';
import hitsListReducer from '../reducers/hitsList.js';

import {
  changeSearchEpic,
  searchHitsEpic,
  searchCategoriesEpic,
  searchItemsEpic,
} from '../epics';

const reducer = combineReducers({
  catalog: catalogListReducer,
  categories: categoriesListReducer,
  hits: hitsListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  changeSearchEpic,
  searchHitsEpic,
  searchCategoriesEpic,
  searchItemsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware),
));

epicMiddleware.run(epic);

export default store;
