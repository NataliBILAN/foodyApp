import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import operations from '../../../redux/category/categoriesOperation';
import { getMenuByCategories } from '../../../redux/menu/menuSelectors';

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
        {/* {currentValue === undefined ? null : (
                    <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
                )} */}
      </>
    );
  }
}
const mapStateToProps = state => ({
  menu: getMenuByCategories(state),
  categories: state.categories.items,
  loading: state.categories.loading,
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
