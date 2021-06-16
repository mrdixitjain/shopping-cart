import Navbar from './Navbar';
import Items from './Items';
import { Component } from 'react';

class Homepage extends Component {

  render() {
    return (
      <div>
        hello
        <Navbar 
          num={this.props.num}
        />
        <Items 
          incrementCart={this.props.incrementCart}
          decrementCart={this.props.decrementCart}
          changeQuantity={this.props.changeQuantity}
          updateCart={this.props.updateCart}
          cardInCart={this.props.cardInCart}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

export default Homepage;