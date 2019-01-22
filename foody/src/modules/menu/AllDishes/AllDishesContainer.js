import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import AllDishesView from './AllDishesView';

import operations from '../../../redux/menu/menuOperations';
import { getProducts, getLoading } from '../../../redux/menu/menuSelectors';
import { addToCart } from '../../../redux/cart/cartAction';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class AllDishesContainer extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;

    this.props.fetchMenuByCategories(nextCategory);
    if (nextCategory === undefined) {
      this.fetchItems(nextCategory);
    }
  }

  render() {
    const { loading, error } = this.props;

    return (
      <>
        <AllDishesView
          menu={this.props.menu}
          addToCart={this.props.addToCart}
        />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error!</h1>}
      </>
    );
  }
}
const mapStateToProps = state => ({
  menu: getProducts(state),
  loading: getLoading(state),
});
const mapDispatchToProps = {
  fetchMenu: operations.fetchMenu,
  fetchMenuByCategories: operations.fetchMenuByCategories,
  addToCart,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AllDishesContainer),
);
