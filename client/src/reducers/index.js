import { combineReducers } from 'redux';
import { products, addToCart } from './products';


const rootReducer = combineReducers({
  products,
  addToCart
})

export default rootReducer
