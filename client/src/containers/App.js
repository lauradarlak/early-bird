import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Order from './Order';
import Navigation from '../components/Navbar';
import ProductsList from './Products';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories/:category_slug' component={ProductsList} />
        <Route exact path='/order' component={Order} />

      </Switch>
      </div>

    )
  }

}
