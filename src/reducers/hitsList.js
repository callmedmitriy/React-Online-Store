import {
  HITS_LIST_REQUEST,
  HITS_LIST_FAILTURE,
  HITS_LIST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export default function hitsListReducer(state = initialState, action) {
  switch (action.type) {
    case HITS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case HITS_LIST_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case HITS_LIST_SUCCESS:
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
