import Homepage from './Homepage';
import Cart from './Cart';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          cart: {},
          num: 0
      };
  }

  setCart = (cart, diff) => {
    this.setState({
        cart: cart,
        num: this.state.num + diff
    });
  }

  cardInCart = (id) => {
    if (id in this.state.cart) 
        return true;
    return false;
  }

  updateCart = (id) => {
    var newCart = this.state.cart;
    newCart[id] = 1;
    this.setCart(newCart, 1);
  }

  decrementCart = (id) => {
    var newCart = this.state.cart;
    newCart[id] -= 1;
    if (newCart[id] === 0) {
        delete newCart[id];
    }
    this.setCart(newCart, -1);
  }

  incrementCart = (id) => {
    var newCart = this.state.cart;
    newCart[id] += 1;
    this.setCart(newCart, 1);
  }

  changeQuantity = (e) => {
    const id = e.target.id;
    var newCart = this.state.cart;
    var newValue = parseInt(e.target.value);
    if (isNaN(newValue)) {
      newValue = 0;
    }
    const diff = newValue - newCart[id];
    newCart[id] = newValue;
    if (newCart[id] === 0) {
        delete newCart[id];
    }
    this.setCart(newCart, diff);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage 
              incrementCart={this.incrementCart}
              decrementCart={this.decrementCart}
              changeQuantity={this.changeQuantity}
              updateCart={this.updateCart}
              cardInCart={this.cardInCart}
              cart={this.state.cart}
              num={this.state.num}
            />
          </Route>
          <Route exact path='/viewcart'>
            <Cart 
              cart={this.state.cart}
              num={this.state.num} 
              incrementCart={this.incrementCart}
              decrementCart={this.decrementCart}
              changeQuantity={this.changeQuantity}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
