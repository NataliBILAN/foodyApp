import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';

import { getMenuItemById } from '../../../redux/menu/menuSelectors';
import { addToCart } from '../../../redux/cart/cartAction';

class MenuItemContainer extends Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    // const { category } = this.props;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: '/menu',
      search: ``,
    });
  };

  render() {
    return (
      <MenuItemView
        onGoBack={this.handleGoBack}
        item={this.props.item}
        addToCart={this.props.addToCart}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: getMenuItemById(state, props.match.params.id),
});

const mapdispatchtoprops = { addToCart };

export default withRouter(
  connect(
    mapStateToProps,
    mapdispatchtoprops,
  )(MenuItemContainer),
);
