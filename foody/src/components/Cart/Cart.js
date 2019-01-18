import React from 'react';

const Cart = ({ menu = [], removeFromCart }) =>
  menu.length > 0 ? (
    <table>
      <tbody>
        {menu.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button">+</button>
              {amount}
              <button type="button">-</button>
            </td>
            <td>
              <button type="button" onClick={() => removeFromCart(id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h2>Cart is empty!</h2>
  );

export default Cart;
