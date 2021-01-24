import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <Link to="/">
          <h1>MouseHeaven</h1>
        </Link>

        <Link className="cart-icon" to="/cart">
          <div className="cart-icon-values">
            <div className="cart-total">
              ${this.props.totalPrice.toFixed(2)}
            </div>
            <div className="in-cart-items">
              {this.props.numberOfItems} items
            </div>
          </div>
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </header>
    );
  };
}

export default Header;
