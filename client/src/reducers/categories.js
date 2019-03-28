import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categoriesActions";

const initialState = {
  items: [],
  error: null,
};


export default function categories(state = initialState, action) {

  switch (action.type) {
    case FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        error: null
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.categories
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}