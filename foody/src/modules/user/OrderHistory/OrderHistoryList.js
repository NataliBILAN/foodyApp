import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../../../ui/PageTitle';

const OrderHistoryList = ({ orderHistory }) => (
  <OrdersWrap>
    <PageTitle>What you ordered</PageTitle>
    <Table>
      <thead>
        <HeadingRow>
          <Heading>Date</Heading>
          <Heading>Price</Heading>
          <Heading>Delivery adress</Heading>
          <Heading>Rating</Heading>
        </HeadingRow>
      </thead>
      <tbody>
        {orderHistory.map(order => (
          <Row key={order.id}>
            <td>{order.date}</td>
            <td>{order.price}</td>
            <td>{order.address}</td>
            <td>{order.rating}</td>
          </Row>
        ))}
      </tbody>
    </Table>
  </OrdersWrap>
);

const OrdersWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid blueviolet;
  padding: 20px;
`;

const HeadingRow = styled.tr`
  background-color: #7b1fa2;
`;

const Heading = styled.th`
  text-align: center;
  font-size: 24px;
  color: #fafafa;
`;

const Row = styled.tr`
  text-align: center; 

  :nth-child(odd){
  background-color: #e495e4;
}
  :nth-child(even){
  background-color: #b3e5fc;
}
`;

export default OrderHistoryList;
