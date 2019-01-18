import React, { Component } from 'react';
import OrderHistoryList from './OrderHistoryList';
import getAllOrders from '../../../services/api';

class OrderHistoryContainer extends Component {
  state = {
    orders: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const orders = await getAllOrders();

      this.setState({ orders, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { orders, error, loading } = this.state;
    return (
      <>
        {error && <h1>Error</h1>}
        {loading && <h1>Loading</h1>}
        <OrderHistoryList orderHistory={orders} />
      </>
    );
  }
}
export default OrderHistoryContainer;
