import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Order from './Order';
import ProductsList from './Products';

import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/categories')
      .then(response => response.json())
      .then(categories => this.setState({ categories }))
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (<Home categories={this.state.categories} {...props} /> )} />
        <Route exact path='/categories/:category_slug' component={ProductsList} />
        <Route exact path='/order' component={Order} />

      </Switch>
    )
  }

}
