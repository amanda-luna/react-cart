import React from 'react';

function Item(props) {
  return (
    <li className="item">
      <img src={props.item.imageURL} alt={props.item.name} />
      <h2>{props.item.name}</h2>
      <div className="price">${props.item.price}</div>
      <div className="description">{props.item.description}</div>
      <button onClick={() => props.addItemToCart(props.item)}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
