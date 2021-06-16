import Navbar from './Navbar';
import CartItems from './CartItems';

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  return (
    <div>
      <Navbar num={props.num} />
      <CartItems 
        cart={cart}
        incrementCart={props.incrementCart}
        decrementCart={props.decrementCart}
        changeQuantity={props.changeQuantity} 
      />
    </div>
  );
}

export default Cart;