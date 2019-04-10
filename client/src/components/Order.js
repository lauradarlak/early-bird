import React, { Component } from 'react';
import { Alert, Container } from 'reactstrap';

export default class Order extends Component {
  render() {
    return(
      <Container className="mt-4">
        <Alert className="w-50 mx-auto" color="success">
          <h2 className="alert-heading">Thank you for ordering!</h2>
          <p>
            We will let the farmer's know that you have made an order. Your order will be ready for pickup at the Saturday morning farmer's market.
          </p>
        </Alert>
      </Container>
    )
  }
}
