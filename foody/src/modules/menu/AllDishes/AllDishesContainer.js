import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
import { connect } from 'react-redux';
import AllDishesView from './AllDishesView';

// import CategorySelector from './CategorySelector';

// import CurrentFilter from './CurrentFilter';
import operations from '../../../redux/menu/menuOperations';
import selectors from '../../../redux/menu/menuSelectors';

// const getCategoryFromProps = props =>
//   queryString.parse(props.location.search).category;

// Передаем значение value, то что в урле храним
// и ищем обьект с таким value
// const findCurrentOption = (options, value) =>
//   options.find(option => option.value === value);

class AllDishesContainer extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  // componentDidUpdate(prevProps) {
  //   const prevCategory = getCategoryFromProps(prevProps);
  //   const nextCategory = getCategoryFromProps(this.props);

  //   console.log('prevCategory: ', prevCategory);
  //   console.log('nextCategory: ', nextCategory);

  //   if (prevCategory === nextCategory) return;
  //   API.getMenuItemsWithCategory(nextCategory).then(menu =>
  //     this.setState({ menu }),
  //   );
  //   if (nextCategory === undefined) {
  //     this.fetchItems(nextCategory);
  //   }
  // }

  // onClearFilter = () => {
  //   this.props.history.push({
  //     pathname: this.props.location.pathname,
  //     search: ``,
  //   });
  //   // reset???
  // };

  // handleCategoryChange = category => {
  //   this.props.history.push({
  //     pathname: this.props.location.pathname,
  //     search: `category=${category.value}`,
  //   });
  // };

  // handleAddNewDish = dish => {
  //   API.addNewDish(dish).then(newDish => {
  //     this.setState(prevState => ({
  //       menu: [...prevState.menu, newDish],
  //     }));
  //   });
  // };

  render() {
    const { loading, error } = this.props;
    // const { menu, categories, loading, error } = this.state;
    // const { match } = this.props;
    // const options = categories.map(category => ({
    //   value: category.name,
    //   label: category.name,
    // }));
    // const currentValue = getCategoryFromProps(this.props);
    // console.log(currentValue);
    // const currentOption = findCurrentOption(options, currentValue);
    // console.log(currentOption);

    return (
      <>
        {/* <CategorySelector
          options={options}
          value={currentOption}
          onChange={this.handleCategoryChange}
        />
        {currentValue === undefined ? null : (
          <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        )} */}

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
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AllDishesContainer),
);
