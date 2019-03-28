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
  const arr = cart;
  arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
  const nodes = hasProducts ? (

    orderedCart.map(item =>
        <p>{item.name} x {item.quantity} = ${ item.total }</p>

    )

  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      Total: ${cart.reduce((a, b) => {
          return a + b.total}, 0)}


    </div>
  )
}

export default Cart
