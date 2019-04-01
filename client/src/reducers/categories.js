import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categoriesActions";

const initialState = {
  items: [],
  error: null,
};

const updateQuant = (categories, item, itemCat) => {
  return itemCat.products.map(product => {
    if(product.id === item.payload.item.id && item.payload.item.quantity > 0) {
      return {
        ...product,
        quantity: item.payload.item.quantity -= 1
      }
    }
    return {
      ...product
    }
  })
}


const updateState = (categories, item) => {
  const findCatIndex = e => e === itemCat;
  let itemCat = categories.items.filter(category => category.slug === item.pathname)[0];
  let catIndex = categories.items.findIndex(findCatIndex)

  return {
    ...categories,
    items: [
      ...categories.items.slice(0, catIndex),
      {
        ...categories.items[catIndex],
        products: [...updateQuant(categories, item, itemCat)]
      },
      ...categories.items.slice(catIndex + 1)
    ]
  }
}

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
    case 'ADD':
      return updateState(state, action)
    default:
      return state;
  }
}
