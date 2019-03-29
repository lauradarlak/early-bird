import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productActions';
import Cart from './Cart'
import ProductList from '../components/ProductsList';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

class ProductsContainer extends Component {

  render() {
    const { category_slug } = this.props.match.params
    const selectedCategory = this.props.categories.filter((c) => c.slug === category_slug);

    return (
      <React.Fragment>
      <Container>
        <Row className="mt-4">
          <Col md="9">
            <ProductList products={selectedCategory} addToCart={addToCart} />
          </Col>
          <Col md="3">
            <Cart cart={this.props.cart} />
          </Col>
        </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  cart: state.cart
});



export default connect(mapStateToProps, { addToCart })(ProductsContainer)
