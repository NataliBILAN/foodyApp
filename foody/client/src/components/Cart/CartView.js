import React from 'react';

const CartView = ({
  products = [],
  incrementAmount,
  decrementAmount,
  removeFromCart,
  total,
}) =>
  products.length > 0 ? (
    <div>
      <table>
        <tbody>
          {products.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <button type="button" onClick={() => decrementAmount(id)}>
                  -
                </button>
                {amount}
                <button type="button" onClick={() => incrementAmount(id)}>
                  +
                </button>
              </td>
              <td>
                <button type="button" onClick={() => removeFromCart(id)}>
                  Remove
                </button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
      <p>Общая сумма: {total}</p>
    </div>
  ) : (
    <h2>Cart is empty!</h2>
  );

export default CartView;
