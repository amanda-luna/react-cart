import React from 'react';

export default function CartItem(props) {
  return (
    <li className="cart-item">
      <div className="name">{props.cartItem.name}</div>
      <div className="price">@ ${props.cartItem.price}</div>
      <button onClick={() => props.removeFromCart(props.cartItem)}>
        <i className="far fa-times-circle"></i>
      </button>
    </li>
  );
}
