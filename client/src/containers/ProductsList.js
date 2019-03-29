import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productActions';
import Cart from './Cart';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText, CardImg } from "reactstrap";

class ProductsList extends Component {
  render() {
    const { error, products, addToCart, cart } = this.props;

    return (
      <Container>
        <h2>Product List Container</h2>
        <Row>
        {products[0].products.map(product =>
        <Col md="4">
          <Card body key={product.id}>
            <CardTitle>Item: {product.name}</CardTitle>
            <CardText>Farmer: {product.farmer}</CardText>
            <CardText>Price: ${product.price}</CardText>
            <CardText>Quantity Remaining: {product.quantity || 0}</CardText>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card>
        </Col>
        )}
      </Row>
      <Row>
        <Cart
          cart={cart}
          products={products} />
      </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => dispatch(addToCart(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
