
import React from 'react';
import {  Col, CardImg, CardBody, Card, Button, CardTitle, CardText } from "reactstrap";

const ProductItem = ({ dispatch, addToCart, product }) => {

  return (
    <Col md="4" className="mb-3">
      <Card className="h-100" key={product.id}>
        <CardImg className="pt-3" height="200px" src={`${product.image}`}/>
        <CardBody>
          <CardTitle className="my-1">Product or Variety: {product.name}</CardTitle>
          <CardText className="mb-1">Farmer: {product.farmer}</CardText>
          <CardText className="mb-1">Price: ${product.price}</CardText>
          <CardText className="font-weight-bold">
            {product.quantity > 0 ? `Quantity Remaining: ${product.quantity}` : 'Sold Out' }
          </CardText>
        </CardBody>
        <div className="d-flex align-items-center my-3">
          <Button className="mx-auto" color="success" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
        </div>
      </Card>
    </Col>
  )
}

export default ProductItem
