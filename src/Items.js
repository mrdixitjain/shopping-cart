import { Component} from 'react';
import Cards from './Cards';

class Items extends Component {
  render() {
    const cart = this.props.cart;
  
    return (
      <div
          style={{
              margin: "110px auto auto ",
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
          }}
      >
        {Cards.map((card, index) => {
          const id = card[0];
          return(
            <div
              // onClick={() => clickedOnCard(key)}
              style={{
                margin: "10px",
                borderRadius: "5px",
                background: "white",
                height: '375px',
                display: 'block',
                border: '2px solid'
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
              <div style={{textAlign: 'center'}}>
                <div
                  style={{
                    marginTop: '5px'
                  }}
                  >
                    Card {index + 1}
                  </div>
                  <div
                    style={{
                      marginTop: '5px'
                    }}
                  >
                    Price: Rs. {card[2]}
                  </div>
                  {!this.props.cardInCart(id) ? 
                    <div 
                      style={{ 
                        marginTop: "10px",
                      }}
                    >
                      <button style={{width: '270px'}} onClick={() => this.props.updateCart(id)}>Add</button>
                    </div>
                    :
                    <div>
                      <button onClick={() => this.props.decrementCart(id)}>-</button>
                      <input 
                        type='number'
                        value={cart[id]}
                        id={id}
                        onChange={this.props.changeQuantity}
                        style={{
                          maxWidth: "50px", 
                          textAlign: 'center', 
                          marginLeft: "5px",
                          marginRight: '5px',
                          marginTop: "10px"
                        }}
                      />
                      <button onClick={() => this.props.incrementCart(id)}>+</button>
                    </div>
                  }
                    {/* <p style={{ textAlign: "center", marginTop: "0px"}}>hello</p> */}
                </div>
                      </div>
                  )
              })}
          </div>
      );
  }
}

export default Items;