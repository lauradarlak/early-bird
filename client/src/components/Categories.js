import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card,
  Button, CardTitle, CardText, CardImg } from "reactstrap";

const Categories = ({ categories }) => (
  <React.Fragment>
    <Row>
      <Col>
        <h2 className="mb-4">All Product Categories</h2>
      </Col>
    </Row>
    <Row>
    {categories.map(category =>
     <Col md="4" className="mb-3">
       <Card body>
       <CardImg height="200px" src={`${category.image}`}/>
        <CardTitle className="text-center font-weight-bold mt-3">{category.name}</CardTitle>
        <Button color="success" tag={Link} to={`/categories/${category.slug}`}>Browse {category.name}</Button>
       </Card>
     </Col>
   )}
    </Row>
  </React.Fragment>
);

export default Categories;
