import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Jumbotron } from "reactstrap";
import { fetchCategories } from '../actions/categoriesActions';
import Categories from '../components/Categories';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
      <Container className="mt-4">
      <Jumbotron>
        <h1 className="display-4">earlybird.io</h1>
        <p className="lead">Welcome to the <em>earlybird</em> ecommerce platform for the Ithaca Farmer's Market. Products are sorted by category. Within each category you will find products available from all of the farmers who grow, raise, or produce that product. By shopping with earlybird.io farmers know how much product to bring to market, and you will always get the fresh food you are looking for without arriving to the farmer's market at dawn!</p>
        <hr className="my-2" />
      </Jumbotron>
        <Categories categories={categories} />
      </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items
});


export default connect(mapStateToProps, { fetchCategories })(Home)
