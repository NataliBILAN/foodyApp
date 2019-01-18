import React, { Component } from 'react';
import OrderHistoryList from './OrderHistoryList';
import getAllOrders from '../../../services/api';

class OrderHistoryContainer extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    getAllOrders().then(orders => {
      this.setState({ orders });
    });
  }

  render() {
    const { orders } = this.state;
    return (
      <OrderHistoryList
        orderHistory={orders}
        // onShowMoreInfo={this.showMoreInfo}
      />
    );
  }
}
export default OrderHistoryContainer;
