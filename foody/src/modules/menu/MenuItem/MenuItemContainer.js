import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';

import selectors from '../../../redux/menu/menuSelectors';

class MenuItemContainer extends Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.props;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  render() {
    return <MenuItemView onGoBack={this.handleGoBack} item={this.props.item} />;
  }
}

const mapStateToProps = (state, props) => ({
  item: selectors.getMenuItemById(state, props.match.params.id),
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(MenuItemContainer),
);
