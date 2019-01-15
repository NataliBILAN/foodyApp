import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
import { connect } from 'react-redux';
import AllDishes from './AllDishesView';

// import CategorySelector from './CategorySelector';

// import CurrentFilter from './CurrentFilter';
import operations from '../../redux/menu/operations';
import selectors from '../../redux/menu/selectors';

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

        <AllDishes menu={this.props.menu} />
        {/* {loading && <h1>Loading....</h1>}
        {error && <h1>Error!</h1>} */}
      </>
    );
  }
}
const mapStateToProps = state => ({
  menu: selectors.getAllMenu(state),
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
