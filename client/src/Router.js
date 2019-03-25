import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import Cart from './containers/Cart'
import ProductsList from './containers/Products'


const Router = (props) => (
  <Switch>
    <Route exact path='/' render={(props) => <Home {...props} />} />
    // <Route exact path='/cart' component={Cart} />
    // <Route exact path='/categories/:category_slug' component={ProductsList} />
  </Switch>
)

export default Router
