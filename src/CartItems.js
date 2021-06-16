import { Link } from "react-router-dom";
import Cards from './Cards';

const CartItems = (props) => {
  const cart = props.cart;
  let total = 0;
  for(var id in cart) {
    total += Cards[id][2]*cart[id];
  };
  return(
    <div>
      <h1 style={{textAlign: 'center', margin: "110px auto 30px ",}}>My Cart</h1>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          marginLeft: '18%'
        }}
      >
        {Object.keys(cart).map((id) => {
          const card = Cards[id];
          return(
            <div
              style={{
                margin: "10px",
                borderRadius: "5px",
                background: "white",
                height: '375px',
                display: 'block',
                // border: '2px solid'
              }}
              key={id}
              id='card'
              className="card"
            >
              <img
                style={{ 
                  width: "300px",
                  height: "275px" 
                }}
                alt='programmer'
                src={card[1]}
              />
              <div>
                <div
                  style={{
                    marginTop: '5px'
                  }}
                  >
                    Card {id}
                  </div>
                  <div
                    style={{
                      marginTop: '5px'
                    }}
                  >
                    Rs. {card[2]}
                  </div>
                  <div>
                    <button onClick={() => props.decrementCart(id)}>-</button>
                    <input 
                      type='number'
                      value={cart[id]}
                      id={id}
                      onChange={props.changeQuantity}
                      style={{
                        maxWidth: "50px", 
                        textAlign: 'center', 
                        marginLeft: "5px",
                        marginRight: '5px',
                        marginTop: "10px"
                      }}
                    />
                      <button onClick={() => props.incrementCart(id)}>+</button>
                    </div>
                </div>
              </div>
          )
        })}
      </div>
      <div 
        style={{
          width: '95%', 
          height: '100px',
          marginTop: '20px',
          padding: '2rem',
          fontSize: '40px',
          left: 0,
          textAlign: 'center', 
          bottom: 0,
          backgroundColor: '#f8f0f1'}}
        >
          <div>
            Cart Total : INR {total} /-
          </div>
          <Link to="/">
            <button style={{width: '20%', height: '50px', fontSize: '20px', backgroundColor: '#d8d7ff'}}>
              Checkout -->
            </button>
          </Link>
        </div>
    </div>
  );
}

export default CartItems;