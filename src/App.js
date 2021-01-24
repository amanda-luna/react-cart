import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    items: [],
    cartItems: [],
  };

  componentDidMount = () => {
    fetch('https://5ed0108416017c00165e327c.mockapi.io/api/v1/items')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ items: data });
      });
  };

  addItemToCart = (item) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, { ...item }],
    }));
  };

  removeFromCart = (item) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((ci) => ci !== item),
    }));
  };

  render = () => {
    return (
      <React.Fragment>
        <Header
          numberOfItems={this.state.cartItems.length}
          totalPrice={this.state.cartItems.reduce(
            (acc, ci) => acc + ci.price,
            0
          )}
        />
        <main>
          <Switch>
            <Route
              exact
              path="/cart"
              render={(props) => (
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  {...props}
                />
              )}
            />

            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  items={this.state.items}
                  addItemToCart={this.addItemToCart}
                  {...props}
                />
              )}
            />
          </Switch>
        </main>
      </React.Fragment>
    );
  };
}

export default App;
