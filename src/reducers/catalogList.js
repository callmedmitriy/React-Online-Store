import {
  ITEMS_REQUEST,
  ITEMS_FAILTURE,
  ITEMS_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_FAILTURE,
  SEARCH_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
  search: '',
  /* Должна ли здесь быть категория?!?!?! */
};

export default function catalogListReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
    case ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_FAILTURE:
    case ITEMS_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case SEARCH_SUCCESS:
    case ITEMS_SUCCESS:
      const { list } = action.payload;
      return {
        ...state,
        list,
        loading: false,
        error: null,
      };
    case CHANGE_SEARCH_FIELD: {
      const { search } = action.payload;
      return {
        ...state,
        search,
      };
    }
    default:
      return state;
  }
}
