import {
  ITEM_REQUEST,
  ITEM_FAILTURE,
  ITEM_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  item: {},
  loading: false,
  error: null,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ITEM_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case ITEM_SUCCESS:
      const { item } = action.payload;
      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
