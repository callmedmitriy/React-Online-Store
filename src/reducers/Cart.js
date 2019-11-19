import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEND_CART_REQUEST,
  SEND_CART_SUCCESS,
  SEND_CART_FAILTURE,
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:{
      const { product } = action.payload
      /* а что делать здесь нипанятна */
      return {

      };
    }
    case REMOVE_FROM_CART:
      const { name, size } = action.payload
      return {
        ...state,
        cart: state.cart.filter(o => !(o.name === name && o.size === size))
      };
    case SEND_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_CART_SUCCESS:
      return {
        cart: [],
        loading: false,
        error: null,
      };
    case SEND_CART_FAILTURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}
