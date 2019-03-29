import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions/productActions';
import Cart from './Cart'
import ProductList from './ProductsList';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

class ProductsContainer extends Component {

  render() {
    const { category_slug } = this.props.match.params
    const selectedCategory = this.props.categories.filter((c) => c.slug === category_slug);

    return (

      <ProductList products={selectedCategory} />
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.items,

  cart: state.cart,
  categories: state.categories.items

});

export default connect(mapStateToProps)(ProductsContainer)
