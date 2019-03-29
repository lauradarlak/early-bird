import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../containers/Cart';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText, CardImg } from "reactstrap";

class ProductsList extends Component {


  render() {
    const { error, products, dispatch, addToCart, cart } = this.props;
    const category = products[0]


    return (
      <React.Fragment>
        <h2 className="mb-3">Browse {category.name}</h2>
        <Row>
          {category.products.map(product =>
            <Col md="4">
              <Card body key={product.id}>
                <CardImg height="200px" src={`${product.image}`}/>
                <CardTitle className="my-1">Product or Variety: {product.name}</CardTitle>
                <CardText className="mb-1">Farmer: {product.farmer}</CardText>
                <CardText className="mb-1">Price: ${product.price}</CardText>
                <CardText className="font-weight-bold">
                {product.quantity > 0 ? `Quantity Remaining: ${product.quantity}` : 'Sold Out' }
                </CardText>
                <Button color="success" onClick={() => this.props.dispatch(addToCart(product))}>Add to Cart</Button>
              </Card>
            </Col>
          )}
        </Row>
      </React.Fragment>
    )
  }
}


export default connect()(ProductsList)
