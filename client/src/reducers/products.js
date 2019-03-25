import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "./productActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};
