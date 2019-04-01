import { combineReducers } from 'redux';
import cart from './cart';
import categories from './categories';


const rootReducer = combineReducers({
  cart,
  categories
})

export default rootReducer
