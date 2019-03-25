import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";

const Categories = (props) => (

  <Row>
  <div>
    <h2>Categories Container</h2>
  </div>
  {props.categories.map(category =>
   <Col md="4">
     <Card body>
       <CardTitle>{category.slug}</CardTitle>
       <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
       <Link to={`/categories/${category.slug}`}>
         <span>Click</span>
       </Link>
     </Card>
   </Col>
 )}
  </Row>
);



export default Categories;
