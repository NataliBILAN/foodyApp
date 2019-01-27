import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import CurrentFilter from './CurrentFilter';

import operations from '../../../redux/category/categoriesOperation';
import { getMenuByCategories } from '../../../redux/menu/menuSelectors';
import {
  getAllCategories,
  getCategoriesLoading,
} from '../../../redux/category/categoriesSelectors';

import CategorySelectorView from './CategorySelectorView';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;
const findCurrentOption = (options, value) =>
  options.find(option => option.value === value);

class CategorySelectorContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category.value}`,
    });
  };

  onClearFilter = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
  };

  render() {
    const { categories } = this.props;

    const options = categories.map(category => ({
      value: category.name,
      label: category.name,
    }));
    const currentValue = getCategoryFromProps(this.props);
    console.log(currentValue);
    const currentOption = findCurrentOption(options, currentValue);
    console.log(currentOption);

    return (
      <>
        <CategorySelectorView
          options={options}
          value={currentOption}
          onChange={this.handleCategoryChange}
        />
        {currentValue === undefined ? null : (
          <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  menu: getMenuByCategories(state),
  categories: getAllCategories(state),
  loading: getCategoriesLoading(state),
});
const mapDispatchToProps = {
  fetchCategories: operations.fetchCategories,
  fetchMenuByCategories: operations.fetchMenuByCategories,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CategorySelectorContainer),
);
