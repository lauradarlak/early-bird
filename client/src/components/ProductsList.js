import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../containers/Cart';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText, CardImg } from "reactstrap";

class ProductsList extends Component {


  render() {
    const { error, products, dispatch, addToCart, cart } = this.props;

    return (
        <React.Fragment>
          <h2>Product List Container</h2>
          <Row>
          {products[0].products.map(product =>
          <Col md="4">
            <Card body key={product.id}>
              <CardTitle>Item: {product.name}</CardTitle>
              <CardText>Farmer: {product.farmer}</CardText>
              <CardText>Price: ${product.price}</CardText>
              <CardText>Quantity Remaining: {product.quantity || 0}</CardText>
              <Button onClick={() => this.props.dispatch(addToCart(product))}>Add to Cart</Button>
            </Card>
          </Col>
          )}
          </Row>
        </React.Fragment>
    )
  }
}


export default connect()(ProductsList)
