import React from 'react';
import { Container } from "reactstrap";
import Categories from './Categories';

{/* Stateless */}

const Home = props => (

    <Container>
      <h2>Homepage: All Categories</h2>
      <Categories categories={props.categories} />
    </Container>

)

export default Home
