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
  ITEM_REQUEST
} from '../actions/actionTypes';
import {
  hitsListSuccess,
  hitsListFailture,
  categoriesSuccess,
  categoriesFailture,
  itemsSuccess,
  itemsFailture,
  itemSuccess,
  itemFailture,
} from '../actions/actionCreators';

export const searchItemEpic = (action$) => action$.pipe(
  ofType(ITEM_REQUEST),
  tap((o) => console.log('item search epic', o)),
  map(o => o.payload.id),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/${o}`).pipe(
    retry(3),
    map((o) => itemSuccess(o)),
    catchError((e) => of(itemFailture(e))),
  )),
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
  tap((o) => console.log('search items epic', o)),
  debounceTime(300),
  map((o) => new URLSearchParams({
    offset: o.payload.offset,
    categoryId: o.payload.categoryId,
    q: o.payload.search,
  })),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/?${o}`).pipe(
    retry(3),
    map((o) => itemsSuccess(o)),
    catchError((e) => of(itemsFailture(e))),
  )),
);
