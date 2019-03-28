import { combineReducers } from 'redux';
import { products } from './products';
import cart from './cart';
import categories from './categories';


const rootReducer = combineReducers({
  products,
  cart,
  categories
})

export default rootReducer
