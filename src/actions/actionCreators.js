import {
  HITS_LIST_REQUEST,
  HITS_LIST_FAILTURE,
  HITS_LIST_SUCCESS,
  CATEGORIES_REQUEST,
  CATEGORIES_FAILTURE,
  CATEGORIES_SUCCESS,
  ITEMS_REQUEST,
  ITEMS_FAILTURE,
  ITEMS_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_FAILTURE,
  SEARCH_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from './actionTypes';

/*
    Обработка списка популярных товаров
*/
export const hitsListRequest = () => ({
  type: HITS_LIST_REQUEST,
});

export const hitsListFailture = (error) => ({
  type: HITS_LIST_FAILTURE,
  payload: { error },
});

export const hitsListSuccess = (list) => ({
  type: HITS_LIST_SUCCESS,
  payload: { list },
});

/*
    Получение списка категорий
*/
export const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST,
});

export const categoriesFailture = (error) => ({
  type: CATEGORIES_FAILTURE,
  payload: { error },
});

export const categoriesSuccess = (list) => ({
  type: CATEGORIES_SUCCESS,
  payload: { list },
});

/*
    Получение списка товаров
*/
export const itemsRequest = () => ({
  type: ITEMS_REQUEST,
});

export const itemsFailture = (error) => ({
  type: ITEMS_FAILTURE,
  payload: { error },
});

export const itemsSuccess = (list) => ({
  type: ITEMS_SUCCESS,
  payload: { list },
});


/*
    Поиск товаров
*/
export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const searchFailture = (error) => ({
  type: SEARCH_FAILTURE,
  payload: { error },
});

export const searchSuccess = (list) => ({
  type: SEARCH_SUCCESS,
  payload: { list },
});

/*
    Обработка поля поиска
*/
export const changeSearchField = (search) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});
