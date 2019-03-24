import React, { Component } from 'react';
import Categories from './Categories';
import { Container, Row, Col } from "reactstrap";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col>
          Testing App Container!
          </Col>
        </Row>
      </Container>

        <Categories />
      </div>
    );
  }
}
