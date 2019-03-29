import { combineReducers } from 'redux';

import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions/productActions";

const initialState = {
  items: [],
  error: null,

};


export function products(state = initialState, action) {

  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      };
      case 'ADD':

        {
          if(action.payload.item.quantity > 0) {
            action.payload.item.quantity -= 1
          }


        }

    default:
      return state;
  }
}
 {/*
   export function addToCart(state = {}, action) {

     switch (action.type) {
       case 'ADD':
         return {
           ...state,
           quantity: action.payload.item.quantity - 1
         }
       default:
         return state
     }
   }

   */}
