import React from 'react';
import Categories from './Categories';

import { Container } from "reactstrap";

export default function Home(props) {

  return (
    <Container>
      <h2>Homepage: All Categories</h2>
      <Categories categories={props.categories} />
    </Container>
  )
}
