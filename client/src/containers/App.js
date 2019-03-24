import React, { Component } from 'react';
import Categories from './Categories';
import { Container, Row, Col, Card,
  Button, CardTitle, CardText } from "reactstrap";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/categories')
      .then(response => response.json())

      .then(categories => this.setState({ categories }))

  }

  render() {
    return (
      <div>
      <Container>
        <h1>Testing App Container!</h1>
        <Categories categories={this.state.categories}/>
      </Container>
      </div>
    );
  }
}
