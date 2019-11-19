import {
  ITEMS_REQUEST,
  ITEMS_FAILTURE,
  ITEMS_SUCCESS,
  CHANGE_SEARCH_FIELD,
  CATEGORIES_CHANGE,
  CLEAR_LIST,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
  search: '',
  more: true,
};

export default function catalogListReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ITEMS_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case ITEMS_SUCCESS:
      const data = action.payload.list;
      return {
        ...state,
        list: state.list.concat(data),
        loading: false,
        error: null,
        more: !(data.length < 6),
      };
    case CHANGE_SEARCH_FIELD: {
      const { search } = action.payload;
      return {
        ...state,
        list: [],
        search,
      };
    }
    case CATEGORIES_CHANGE:
    case CLEAR_LIST:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
}
