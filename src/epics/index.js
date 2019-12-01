import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  map, tap, retry, debounceTime, switchMap, catchError, exhaustMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import {
  HITS_LIST_REQUEST,
  CATEGORIES_REQUEST,
  ITEMS_REQUEST,
  ITEM_REQUEST,
  SEND_CART_REQUEST,
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
  sendCartSuccess,
  sendCartFailture,
} from '../actions/actionCreators';

export const searchItemEpic = (action$) => action$.pipe(
  ofType(ITEM_REQUEST),
  tap((obj) => console.log('item search epic', obj)),
  map((obj) => obj.payload.id),
  switchMap((obj) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/${obj}`).pipe(
    retry(3),
    map((obj) => itemSuccess(obj)),
    catchError((error) => of(itemFailture(error))),
  )),
);

export const searchHitsEpic = (action$) => action$.pipe(
  ofType(HITS_LIST_REQUEST),
  tap((obj) => console.log('top-sales epic', obj)),
  switchMap((obj) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/top-sales`).pipe(
    retry(3),
    map((obj) => hitsListSuccess(obj)),
    catchError((error) => of(hitsListFailture(error))),
  )),
);

export const searchCategoriesEpic = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUEST),
  tap((obj) => console.log('categories epic', obj)),
  switchMap((obj) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/categories`).pipe(
    retry(3),
    map((obj) => categoriesSuccess(obj)),
    catchError((error) => of(categoriesFailture(error))),
  )),
);

export const searchItemsEpic = (action$) => action$.pipe(
  ofType(ITEMS_REQUEST),
  tap((obj) => console.log('search items epic', obj)),
  debounceTime(300),
  map((obj) => new URLSearchParams({
    offset: obj.payload.offset,
    categoryId: obj.payload.categoryId,
    q: obj.payload.search,
  })),
  switchMap((obj) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/items/?${obj}`).pipe(
    retry(3),
    map((obj) => itemsSuccess(obj)),
    catchError((error) => of(itemsFailture(error))),
  )),
);

export const sendOrderEpic = (action$, state$) => action$.pipe(
  ofType(SEND_CART_REQUEST),
  tap((obj) => console.log('send order epic', obj)),
  debounceTime(300),
  exhaustMap((obj) => ajax({
    url: `${process.env.REACT_APP_REQUEST_URL}/api/order`,
    method: 'POST',
    body: JSON.stringify({
      owner: {
        phone: state$.value.cart.phone,
        address: state$.value.cart.address,
      },
      items: state$.value.cart.cart,
    }),
  }).pipe(
    retry(3),
    map((obj) => sendCartSuccess(obj)),
    catchError((error) => of(sendCartFailture(error))),
  )),
);
