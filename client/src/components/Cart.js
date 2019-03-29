import React from 'react';
import { compare } from '../Utils';

import OrderButton from './OrderButton';
import {  Card, Button, CardTitle, CardText, CardImg } from "reactstrap";

 const Cart = ({ cart, products }) => {

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);

  const cartItems = hasProducts ? (
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
        {cartItems}
        <CardText><strong>Total: ${cart.reduce((a, b) => { return a + b.total }, 0)}</strong></CardText>
        <OrderButton hasProducts={hasProducts} cart={cart} />
      </Card>
    </div>
  )
}

export default Cart
