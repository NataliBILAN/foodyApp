import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import AllDishesView from './AllDishesView';

import operations from '../../../redux/menu/menuOperations';
import selectors from '../../../redux/menu/menuSelectors';

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
        <AllDishesView menu={this.props.menu} />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error!</h1>}
      </>
    );
  }
}
const mapStateToProps = state => ({
  menu: selectors.getAllMenu(state),
  loading: selectors.getLoading(state),
});
const mapDispatchToProps = {
  fetchMenu: operations.fetchMenu,
  fetchMenuByCategories: operations.fetchMenuByCategories,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AllDishesContainer),
);
