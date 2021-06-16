import {Link} from 'react-router-dom';

const Navbar = (props) => {

  return (
    <div 
      style={{
        height: "100px",
        width: "100%",
        position: "fixed",
        zIndex: '100',
        backgroundColor: "#1b1b30",
        // textAlign: 'center',
        top: "0",
        left: 0,
        color: 'white',
        fontSize: "30px",
        minWidth: '370px'
      }}
    >
      <p style={{marginLeft: "5%", display: "inline-block", fontWeight: "bold",}}>
        <Link 
          to="/"
          style={{
            textDecoration: "none",
            color: 'white'
          }}
        >
          Homepage
        </Link>
      </p>

      {/* <p style={{marginLeft: "auto", alignSelf: 'center', display: "inline-block", color: '#ff7878'}}>
          Shopping-Cart-Project
      </p> */}

      <p style={{marginRight: "10%", display: "inline-block", float: 'right'}}>
        <Link 
          to="/viewcart"
          style={{
            float: 'right',
            textDecoration: "none",
            color: 'white'
          }}
        >
          Cart {props.num}
        </Link>
      </p>      
    </div>
  );
};

export default Navbar;