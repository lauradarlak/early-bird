import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

export default class Products extends Component {

  componentDidMount() {
    const { category_slug } = this.props.match.params
    this.props.dispatch(getProducts(category_slug))
  }

  render() {
    const { error, products } = this.props;
    return (
      <Container>
        <h2>Product List Container</h2>
        <Row>
        {products.map(product =>
        <Col md="4">
          <Card body key={product.id}>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.farmer}</CardText>
          </Card>
        </Col>
        )}
      </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.erro
});

export default connect(mapStateToProps)(Products)
