import React from 'react';
import { compare } from '../Utils';
import { updateInventory } from '../actions/cartActions';
import {  Card, Button, CardTitle, CardText } from "reactstrap";

 const Cart = ({ cart, products }) => {

  const handleOnSubmit = event => {
    const orderArray = cart;
    orderArray.map(item => {
      updateInventory(item)
    })
  }

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);
  const nodes = hasProducts ? (

    orderedCart.map(item =>
        <CardText>{item.name} x {item.orderedQuantity} = ${ item.total }</CardText>
    )

  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <div>
      <h3 className="mb-3">Quick Cart</h3>
      <Card body>
      {nodes}
      <strong>Total: ${cart.reduce((a, b) => { return a + b.total }, 0)}</strong>
      <Button 
        className="mt-3"
        disabled={hasProducts ? '' : 'disabled'}
        color="success" onClick={() => handleOnSubmit()}
        type="submit">Send Order</Button>
      </Card>

    </div>
  )
}

export default Cart
