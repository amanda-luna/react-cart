import React from 'react';
import Item from './Item';

const Home = (props) => {
  return (
    <ul className="items">
      {props.items.map((item) => (
        <Item item={item} key={item.id} addItemToCart={props.addItemToCart} />
      ))}
    </ul>
  );
};

export default Home;
