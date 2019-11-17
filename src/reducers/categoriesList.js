import {
  CATEGORIES_REQUEST,
  CATEGORIES_FAILTURE,
  CATEGORIES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export default function categoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CATEGORIES_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case CATEGORIES_SUCCESS:
      const { list } = action.payload;
      return {
        ...state,
        list,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
