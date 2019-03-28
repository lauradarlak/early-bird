import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions/productActions';
import Cart from './Cart'
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

class Products extends Component {

  componentDidMount() {
    const { category_slug } = this.props.match.params
    this.props.fetchProducts(category_slug)
  }

  render() {

    const { error, products, addToCart, cart } = this.props;
    return (
      <Container>
        <h2>Product List Container</h2>
        <Row>
        {products.map(product =>
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

      <Cart cart={cart} />
      </Row>
      </Container>
    )
  
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.error,
  cart: state.cart


});

function mapDispatchToProps(dispatch) {

  return {

    addToCart: item => dispatch(addToCart(item)),
    fetchProducts: cat => dispatch(fetchProducts(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
