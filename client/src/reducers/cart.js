const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1, total: item.price } ]
    : [ ...cartWithoutItem(cart, item),
      { ...cartItem,
        quantity: cartItem.quantity + 1,
        total: (cartItem.quantity * cartItem.price) + cartItem.price}]
}

const cart = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload.item)

    default:
      return state;
  }
}

export default cart

{/*

work
export default function cart(state = [], action) {
switch(action.type) {
  case 'ADD':
    return [
      ...state, action.payload
    ]

    default:
    return state

}

}
  */}
