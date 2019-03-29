import React from 'react';
import { compare } from '../Utils';

import OrderButton from './OrderButton';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

 const FinalCart = ({ cart, products }) => {

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);

  const cartItems = hasProducts ? (
    orderedCart.map(item =>
        <ListGroupItem>{item.name} x {item.orderedQuantity} = ${ item.total }</ListGroupItem>
    )
  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <Container>
      <h2 className="mb-3">My Cart</h2>
      <ListGroup flush>
        {cartItems}
        <ListGroupItem><strong>Total: ${cart.reduce((a, b) => { return a + b.total }, 0)}</strong></ListGroupItem>
        <OrderButton hasProducts={hasProducts} cart={cart} />
      </ListGroup>
    </Container>
  )
}

export default FinalCart
