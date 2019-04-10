import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateInventory, resetCart } from '../actions/cartActions';
import { Button } from "reactstrap";

  const OrderButton = ({ hasProducts, cart, resetCart }) => {
    const handleOnSubmit = event => {
      const orderArray = cart;
      console.log('A')
      orderArray.map(item => {
        return updateInventory(item)
      })
      console.log('B')
      resetCart();
    }

    return (
      <Button
        className="mt-3 d-inline"
        disabled={hasProducts ? false : true}
        color="success" onClick={() => handleOnSubmit()}
        type="submit">Send Order</Button>
    )

  }

export default withRouter(connect(null, { resetCart })(OrderButton))
