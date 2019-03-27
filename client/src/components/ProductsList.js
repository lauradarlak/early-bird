import React from 'react'

const ProductsList = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
)

export default ProductsList








<Col md="4">
  <Card body key={product.id}>
    <CardTitle>Item: {product.name}</CardTitle>
    <CardText>Farmer: {product.farmer}</CardText>
    <CardText>Price: ${product.price}</CardText>
    <CardText>Quantity Remaining: {product.quantity || 0}</CardText>
    <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
  </Card>
</Col>
