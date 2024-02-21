import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddAction, cartRemoveAction } from '../actions/cartAction'
import API_URL from '../Util.js'


function Cart() {

  let { order } = useParams([])
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const userDetails = useSelector(state => state.user)
  const [cartItems, setCartItems] = useState(cart)
  // const [cartItems, setCartItems] = useState(userDetails?.user?.cart ? userDetails?.user?.cart : cart)
  const [token, setToken] = useState(userDetails)
  // const [data, setData] = true
  // console.log(data)
  const [orderdetails, setOrderdetails] = useState([])
  // console.log(cartItems,"cart.js")
  const firstLogin = localStorage.getItem('myData')
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

//   useEffect(() => {
       
//     const storedData = localStorage.getItem('myData');

//     if (storedData) {
//         const data = JSON.parse(storedData);
    
//     }
//     const firstLogin = localStorage.getItem('myData')
//     if (firstLogin) {
      
//     }
   
// }, [])
  const onAdd = (product) => {
    if (firstLogin) {

      const exist = cartItems.find((x) => x._id === product._id);
      // console.log(product)
      if (exist) {

        setCartItems(
          cartItems.map((x) =>
            x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
          )

        );

      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);

      }
    }

    else {
      alert("please login to add")
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
      dispatch(cartRemoveAction(cartItems));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      dispatch(cartRemoveAction(cartItems));
    }
  };





  const Payment = () => {
    alert(`To process your Order,you are requested to pay ${totalPrice.toFixed(2)} in payments page`)
    const addToOrders = async () => {
      try {
        // const response = await Axios.post('http://localhost:3001/api/orders', { orderId: totalPrice.toFixed(2), details: { ...userDetails, cart: cartItems } }, {
        const response = await Axios.post(`${API_URL}/api/orders`, { orderId: totalPrice.toFixed(2), details: { ...userDetails, cart: cartItems } }, {
        })
      } catch (err) {
        alert(err.response.data.msg);
      }
    };
    addToOrders();
    // setCartItems([])
    // dispatch(cartAddAction([]));
    // const updateUserCart = async () => {
    //   try {
    //     const response = await Axios.patch('http://localhost:3001/user/updatecart', {
    //       userId: userDetails?.user?._id,
    //       cart: [],
    //     });
    //   } catch (err) {
    //     alert(err.response.data.msg);
    //   }
    // };
    // updateUserCart();
    // window.location.href = `/createpayment/${totalPrice.toFixed(2)}`;
    window.location.href = `/paymentSuccessPage`;

  }

  return (
    <div className="container">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div style={{ textAlign: 'center', fontSize: '2em' ,color:"black"}}>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="row">
            <div className="col-2"><img style={{ width: "100px" }} src={item.imageURL} alt="img not loaded" /></div>
            <div className="col-2" style={{fontSize:"24px"}}>{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="cart-container">
              {/* {item.qty} x <i style={{color:"black"}} className="fas fa-rupee-sign"></i>{item.price.toFixed(2)} */}
              {item.qty} x <i style={{ color: "black" }} className="fas fa-rupee-sign"></i>{item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right"><i style={{ color: "black" }} className="fas fa-rupee-sign"></i>{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right"><i style={{ color: "black" }} className="fas fa-rupee-sign"></i>{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                <i style={{ color: "black" }} className="fas fa-rupee-sign"></i>{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong><i style={{ color: "black" }} className="fas fa-rupee-sign"></i>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={Payment} style={{ width: "auto" }}>
                Buy now!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
