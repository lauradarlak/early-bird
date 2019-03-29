const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, orderedQuantity: 1, total: item.price } ]
    : [ ...cartWithoutItem(cart, item),
      { ...cartItem,
        orderedQuantity: cartItem.orderedQuantity + 1,
        quantity: cartItem.quantity - 1,
        total: (cartItem.orderedQuantity * cartItem.price) + cartItem.price}]
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
