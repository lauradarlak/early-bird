import React, { Component } from 'react';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

export default class Products extends Component {

    state = {
      productList: []
    }

  componentDidMount() {
    const { category_slug } = this.props.match.params

    fetch(`http://localhost:3001/api/categories/${category_slug}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          productList: data.products
        })
      })

  }

  render() {
    return (
      <div>
      <Container>
      <div>
        <h2>Product List Container</h2>
      </div>
      {/*
        <Row>
      {this.state.productList.map(product =>
        <Col md="4">
          <Card body>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.farmer}</CardText>
          </Card>
        </Col>
      )}
      </Row>



        */}
      </Container>
      </div>
    )
  }
}
