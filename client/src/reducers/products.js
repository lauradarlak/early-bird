import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions/productActions";

const initialState = {
  items: [],
  error: null
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
