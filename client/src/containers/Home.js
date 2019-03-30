import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Jumbotron } from "reactstrap";
import { fetchCategories } from '../actions/categoriesActions';
import Categories from '../components/Categories';

class Home extends Component {

  componentDidMount() {
    if(this.props.categories.length === 0) {
      this.props.fetchCategories()
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
      <Container className="my-4">
      <Jumbotron>
        <h1 className="display-4">earlybird.io</h1>
        <p className="lead">Welcome to the <em>earlybird</em> ecommerce platform for the Ithaca Farmers Market. By shopping with earlybird.io, you are preordering farm fresh products that will be available for pickup at the market.  Now you will always get the fresh food you are looking for without needing to be first in line at the market!</p>
        <hr className="my-2" />
        <p className="lead mb-0">Products are sorted by category. Within each category you will find products available from all of the farmers who grow, raise, or produce that product.</p>
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
