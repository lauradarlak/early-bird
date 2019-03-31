import React from 'react';
import { compare } from '../Utils';

import OrderButton from './OrderButton';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

 const FinalCart = ({ cart, products }) => {

  const hasProducts = cart.length > 0;
  const orderedCart = cart.sort(compare);

  const cartItems = hasProducts ? (
    orderedCart.map(item =>
        <ListGroupItem>
        <img height="75px" src={`${item.image}`} alt={`${item.name}`}/>
        <span className="pl-3">{item.name} x {item.orderedQuantity} = ${ item.total }</span>
        </ListGroupItem>
    )
  ) : (
    <strong>Cart is Empty</strong>
  )

  return (
    <Container className="mt-4">
      <h2 className="mb-3">My Cart</h2>
      <ListGroup flush>
        {cartItems}
        <ListGroupItem><strong>Total: ${cart.reduce((a, b) => { return a + b.total }, 0)}</strong></ListGroupItem>
      </ListGroup>
      <OrderButton hasProducts={hasProducts} cart={cart} />
    </Container>
  )
}

export default FinalCart
