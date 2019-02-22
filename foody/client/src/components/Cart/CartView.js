import React from 'react';
import styled from 'styled-components';

import { Button } from '../../ui/Button';
import { PageTitle } from '../../ui/PageTitle'

const CartView = ({
  products = [],
  incrementAmount,
  decrementAmount,
  removeFromCart,
  total,
}) =>
  products.length > 0 ? (
    <CartContentWrap>
      <Table>
        <tbody>
          {products.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <DecButton type="button" onClick={() => decrementAmount(id)}>
                  -
                </DecButton>
                {amount}
                <IncButton type="button" onClick={() => incrementAmount(id)}>
                  +
                </IncButton>
              </td>
              <td>
                <Button type="button" onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </Table>
      <Total>Total price: {total}</Total>
    </CartContentWrap>
  ) : (
      <CartPageTitle>Cart is empty!</CartPageTitle>
    );

const CartContentWrap = styled.div`
    width: 80%;
    margin: 200px auto 0;
`;
const CartPageTitle = styled(PageTitle)`
  margin: 200px auto 0;
`;
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid blueviolet;
  padding: 20px;
  margin-bottom: 20px;
`;

const DecButton = styled(Button)`
margin-right: 20px;
`;

const IncButton = styled(Button)`
margin-left: 20px;
`;

const Total = styled.p`
  text-transform:uppercase;
  font-weight:700;
`;

export default CartView;
