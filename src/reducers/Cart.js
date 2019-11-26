import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  HANDLE_CHANGE,
  SEND_CART_REQUEST,
  SEND_CART_SUCCESS,
  SEND_CART_FAILTURE,
} from '../actions/actionTypes';

const initialState = {
  cart: [{
    name: 'one',
    size: 'size one',
    count: 2,
    price: 1400,
  }, {
    name: 'two',
    size: 'size two',
    count: 1,
    price: 2300,
  }],
  phone: null,
  address: null,
  loading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:{
      const { product } = action.payload

      let add = true;
      let newCart = state.cart.map(o => {
        if (o.name === product.name && o.size === product.size) {
          add = false
          return {...o, count: o.count += product.count}
        } else {
          return o
        }
      })
      if (add) {
        newCart = [...newCart, product]
      }
      return {
        ...state,
        cart: newCart,
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
        ...state,
        cart: [],
        loading: false,
        error: null,
      };
    case HANDLE_CHANGE: {
      const { name, value } = action.payload
      return {
        ...state,
        [name]: value,
      }
    }
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
