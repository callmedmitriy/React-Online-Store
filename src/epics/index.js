import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  map, tap, retry, filter, debounceTime, switchMap, catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import {
  HITS_LIST_REQUEST,
  CATEGORIES_REQUEST,
  ITEMS_REQUEST,
  SEARCH_REQUEST,
  CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes';
import {
  hitsListSuccess,
  hitsListFailture,
  categoriesSuccess,
  categoriesFailture,
} from '../actions/actionCreators';

export const changeSearchEpic = (action$) => action$.pipe(
  ofType(CHANGE_SEARCH_FIELD),
  map((o) => o.payload.search.trim()),
  filter((o) => o !== ''),
  debounceTime(500),
  map((o) => searchItemsEpic(o)),
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
  tap((o) => console.log('categories', o)),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/categories`).pipe(
    retry(3),
    map((o) => categoriesSuccess(o)),
    catchError((e) => of(categoriesFailture(e))),
  )),
);

/*
  Продумать как добавить offset, category и search query
*/
export const searchItemsEpic = (action$) => action$.pipe(
  ofType(ITEMS_REQUEST),
  map((o) => o.payload.search),
  map((o) => new URLSearchParams({ q: o })),
  tap((o) => console.log(o)),
  /* switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/?${o}`).pipe(
    retry(3),
    map(o => itemsSuccess(o)),
    catchError(e => of(itemsFailture(e))),
  )), */
);
