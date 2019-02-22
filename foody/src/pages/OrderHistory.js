import React from 'react';
import styled from 'styled-components';

import OrderHistoryContainer from '../modules/user/OrderHistory/OrderHistoryContainer';

const OrderHistoryPage = () => (
  <OrdersContentWrap>
    <OrderHistoryContainer />
  </OrdersContentWrap>
);

const OrdersContentWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

export default OrderHistoryPage;
