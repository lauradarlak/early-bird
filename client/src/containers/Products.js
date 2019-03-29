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
        <ProductList products={selectedCategory} addToCart={addToCart} />
        <Cart cart={this.props.cart} />
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
