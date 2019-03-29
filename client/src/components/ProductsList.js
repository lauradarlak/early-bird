import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { Container, Row, Col, Card, CardBody,
  Button, CardTitle, CardText, CardImg } from "reactstrap";

class ProductsList extends Component {

  render() {
    const { dispatch, addToCart, products } = this.props;
    const category = products[0]

    return (
      <React.Fragment>
        <h2 className="mb-3">Browse {category.name}</h2>
        <Row>
          {category.products.map(product =>
            <ProductItem product={product} dispatch={dispatch} addToCart={addToCart} />
          )}
        </Row>
      </React.Fragment>
    )
  }
}


export default connect()(ProductsList)
