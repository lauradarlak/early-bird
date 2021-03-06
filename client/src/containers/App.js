import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Order from '../components/Order';
import FinalCart from '../components/FinalCart';
import Navigation from '../components/Navbar';
import ProductsContainer from './Products';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories/:category_slug' component={ProductsContainer} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/cart' render={() => <FinalCart cart={this.props.cart} />} />
      </Switch>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  cart: state.cart
});

export default withRouter(connect(mapStateToProps)(App))
