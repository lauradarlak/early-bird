import React from 'react'

 const Cart = ({ cart }) => {
   function compare(a, b) {
      let comparison = 0;
      if (a.id > b.id) {
        comparison = 1;
      } else if (a.id < b.id) {
        comparison = -1;
      }
      return comparison;
    }

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);

  const nodes = hasProducts ? (
    orderedCart.map(item =>
        <p>{item.name} x {item.quantity} = {(item.price) * (item.quantity)}</p>
    )
  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>

    </div>
  )
}

export default Cart
