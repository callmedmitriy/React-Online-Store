import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  HITS_LIST_REQUEST,
  CATEGORIES_REQUEST,
  ITEMS_REQUEST,
  SEARCH_REQUEST,
  CHANGE_SEARCH_FIELD,
  CATEGORIES_CHANGE,
} from '../actions/actionTypes';
import {
  hitsListSuccess,
  hitsListFailture,
  categoriesSuccess,
  categoriesFailture,
  itemsRequest,
  itemsSuccess,
  itemsFailture,
} from '../actions/actionCreators';

export const changeSearchEpic = (action$) => action$.pipe(
  ofType(CHANGE_SEARCH_FIELD),
  map((o) => o.payload.search.trim()),
  filter((o) => o !== ''),
  debounceTime(500),
  map((o) => itemsRequest(o)),
);

export const searchHitsEpic = (action$) => action$.pipe(
  ofType(HITS_LIST_REQUEST),
  tap((o) => console.log('top-sales epic', o)),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/top-sales`).pipe(
    retry(3),
    map((o) => hitsListSuccess(o)),
    catchError((e) => of(hitsListFailture(e))),
  )),
);

export const searchCategoriesEpic = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUEST),
  tap((o) => console.log('categories epic', o)),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/categories`).pipe(
    retry(3),
    map((o) => categoriesSuccess(o)),
    catchError((e) => of(categoriesFailture(e))),
  )),
);

export const searchItemsEpic = (action$) => action$.pipe(
  ofType(ITEMS_REQUEST),
  tap((o) => console.log('search items epic',o)),
  map((o) => new URLSearchParams({
    q: o.payload.search, 
    categoryId: o.payload.categoryId, 
    offset: o.payload.offset
  })),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/?${o}`).pipe(
    retry(3),
    map(o => itemsSuccess(o)),
    catchError(e => of(itemsFailture(e))),
  )), 
);
