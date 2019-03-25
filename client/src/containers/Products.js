import React, { Component } from 'react';
import {fetchProducts } from '../actions/productActions'
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

export default class Products extends Component {

    state = {
      productList: []
    }

  componentDidMount() {
    const { category_slug } = this.props.match.params
    this.props.dispatch(getProducts(category_slug))


  }

  render() {
    return (
      <div>
      <Container>
      <div>
        <h2>Product List Container</h2>
      </div>
      {/*
        <Row>
      {this.state.productList.map(product =>
        <Col md="4">
          <Card body>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.farmer}</CardText>
          </Card>
        </Col>
      )}
      </Row>



        */}
      </Container>
      </div>
    )
  }
}
