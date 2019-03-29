
const initialState = {
  items: [],
  error: null,

};

export function products(state = initialState, action) {
  switch (action.type) {
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
