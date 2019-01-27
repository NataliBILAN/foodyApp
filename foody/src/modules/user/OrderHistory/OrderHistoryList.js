import React from 'react';
import s from './OrderHistory.module.css';
import { PageTitle } from '../../../ui/PageTitle';

const OrderHistoryList = ({ orderHistory }) => (
  <div>
    <PageTitle>What you ordered</PageTitle>
    <table className={s.table}>
      <thead>
        <tr className={s.heading_row}>
          <th className={s.heading}>Date</th>
          <th className={s.heading}>Price</th>
          <th className={s.heading}>Delivery adress</th>
          <th className={s.heading}>Rating</th>
        </tr>
      </thead>
      <tbody>
        {orderHistory.map(order => (
          <tr key={order.id} className={s.row}>
            <td>{order.date}</td>
            <td>{order.price}</td>
            <td>{order.address}</td>
            <td>{order.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderHistoryList;
