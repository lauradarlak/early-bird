import React from 'react';
import { compare } from '../Utils';
import { updateInventory } from '../actions/cartActions';

 const Cart = ({ cart, products }) => {


  const handleOnSubmit = event => {

    const orderArray = cart;
    orderArray.map(item => {
      updateInventory(item)
    })
  }

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);
  const arr = cart;
  arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
  const nodes = hasProducts ? (

    orderedCart.map(item =>
        <p>{item.name} x {item.orderedQuantity} = ${ item.total }</p>

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
      <button onClick={() => handleOnSubmit()} type="submit">Send Order</button>

    </div>
  )
}

export default Cart
