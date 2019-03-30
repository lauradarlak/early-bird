import React from 'react';
import { updateInventory } from '../actions/cartActions';
import { Button } from "reactstrap";

  const OrderButton = ({ hasProducts, cart }) => {
    const handleOnSubmit = event => {
      const orderArray = cart;
      orderArray.map(item => {
        updateInventory(item)
      })
    }

    return (
      <Button
        className="mt-3 d-inline"
        disabled={hasProducts ? '' : 'disabled'}
        color="success" onClick={() => handleOnSubmit()}
        type="submit">Send Order</Button>
    )

  }

 export default OrderButton
