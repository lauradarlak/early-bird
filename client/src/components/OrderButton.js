import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import { updateInventory, resetCart } from '../actions/cartActions';
import { Button } from "reactstrap";

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderComplete: false
    }
  }

  hideAlert = () => {
    this.setState({
        orderComplete: false
    });
  }

  render() {
    const { hasProducts, cart, resetCart } = this.props;
    const handleOnSubmit = event => {
      const orderArray = cart;
      console.log('A')
      orderArray.map(item => {
        return updateInventory(item)
      })
      console.log('B')
      this.setState({ orderComplete: true });
      resetCart();
    }

    return(
      <>
      <Button
        className="mt-3 d-inline"
        disabled={hasProducts ? false : true}
        color="success" onClick={() => handleOnSubmit()}
        type="submit">Send Order</Button>
        <div>
      {this.state.orderComplete === false ?
        "" : <SweetAlert success title="Successful Order!" onConfirm={this.hideAlert.bind(this)}>We will let the farmers know about your order. Your order will be ready for pickup at the Saturday morning farmers market. </SweetAlert>
      }
      </div>
      </>
    )
  }
}

export default withRouter(connect(null, { resetCart })(OrderButton))
