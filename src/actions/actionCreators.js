import {
  HITS_LIST_REQUEST,
  HITS_LIST_FAILTURE,
  HITS_LIST_SUCCESS,
  CATEGORIES_REQUEST,
  CATEGORIES_FAILTURE,
  CATEGORIES_SUCCESS,
  CATEGORIES_CHANGE,
  ITEMS_REQUEST,
  ITEMS_FAILTURE,
  ITEMS_SUCCESS,
  ITEM_REQUEST,
  ITEM_FAILTURE,
  ITEM_SUCCESS,
  CHANGE_SEARCH_FIELD,
  CLEAR_LIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEND_CART_REQUEST,
  SEND_CART_SUCCESS,
  SEND_CART_FAILTURE,
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

export const categoriesChange = (id) => ({
  type: CATEGORIES_CHANGE,
  payload: { id },
});


/*
    Получение списка товаров
*/
export const itemsRequest = (offset = 0, categoryId = 0, search = '') => ({
  type: ITEMS_REQUEST,
  payload: {
    offset,
    categoryId,
    search,
  },
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
    Получение полного описания товара
*/
export const itemRequest = (id) => ({
  type: ITEM_REQUEST,
  payload: {
    id
  },
});

export const itemFailture = (error) => ({
  type: ITEM_FAILTURE,
  payload: { error },
});

export const itemSuccess = (item) => ({
  type: ITEM_SUCCESS,
  payload: { item },
});


/*
    Обработка поля поиска
*/

export const changeSearchField = (search) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});

export const clearList = () => ({
  type: CLEAR_LIST,
});

/*
    Работа с корзиной
*/

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product }
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id }
})

export const sendCartRequest = (cart) => ({
  type: SEND_CART_REQUEST,
  payload: { cart },
})

export const sendCartFailture = (error) => ({
  type: SEND_CART_FAILTURE,
  payload: { error }
})

export const sendCartSuccess = () => ({
  type: SEND_CART_SUCCESS,
})