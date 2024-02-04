import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import './ProductItem.css'
import { Link, useParams } from 'react-router-dom'
import { cartAddAction } from '../actions/cartAction'
import Header from '../headers/Header'
import { useDispatch, useSelector } from 'react-redux'
import cartReducer from '../reducers/cartReducer'

function ProductItem({ product, onAdd , onRemove }) {

  const cart = []
  const userDetails = useSelector(state => state.user);
  const [cartItems, setCartItems] = useState(cart)
  const counter = true;
  let [productsdata, setProductsData] = useState({})
  let [productsArray, setProductsArray] = useState([])
  const [productdetails, setProductDetails] = useState({})
  const [token, setToken] = useState(false)
  const [data, setData] = useState({})
  const [role, setRole] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
   
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        const data = JSON.parse(storedData);
        setRole(userDetails?.user?.role)
    }
   
  
}, [role])
  // console.log("prod", cartItems)

  // const onAdd = (product) => {

  //   if (firstLogin) {

  //     const exist = cartItems.find((x) => x.id === product.id);
  //     if (exist) {

  //       setCartItems(
  //         cartItems.map((x) =>
  //           x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
  //         )
  //       );
  //       dispatch(cartAddAction(cartItems))
  //       console.log(cartItems.length)

  //     } else {
  //       setCartItems([...cartItems, { ...product, qty: 1 }]);
  //       dispatch(cartAddAction(cartItems))
  //     }
  //   }

  //   else {
  //     alert("please login to add")
  //   }
  // };
  // const onRemove = (product) => {
  //   if (firstLogin) {

  //     const exist = cartItems.find((x) => x._id === product._id);
  //     console.log(product)
  //     if (exist) {

  //       setCartItems(
  //         cartItems.map((x) =>
  //           x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
  //         )
  //       );
  //       console.log(cartItems.length)

  //     } else {
  //       setCartItems([...cartItems, { ...product, qty: 1 }]);
  //     }
  //   }

  //   else {
  //     alert("please login to add")
  //   }
  // };



  return (
    <>
    { role === 0 ? 
    <div className="card text-center">
      <div className="card-top" ><img src={product.imageURL} style={{ width: "100px", height: "100px" }} /></div>
      <div className="card-body text-dark">
        <div style={{ height: "500px" }}>
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text"><b>Content:</b> {product.content}</p>
          <p className="card-text"><b>Price: </b>  ₹{product.price}</p>
          <p className="card-text"><b>Description: </b> {product.description}</p>
        </div>
        <div>
          <button className="button" onClick={() => onAdd(product)}>Add to Cart <i className="fas fa-shopping-cart"></i></button>
          <button style={{ marginLeft: "20px" }} className="button" ><Link to={`/viewproduct/${product._id}`}>View</Link></button>
        </div>
      </div>
    </div>
    : <>
    <div className="card text-center">
      <div className="card-top" ><img src={product.imageURL} style={{ width: "100px", height: "100px" }} /></div>
      <div className="card-body text-dark">
        <div style={{ height: "500px" }}>
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text"><b>Content:</b> {product.content}</p>
          <p className="card-text"><b>Price: </b>  ₹{product.price}</p>
          <p className="card-text"><b>Description: </b> {product.description}</p>
        </div>
      </div>
    </div>
    </>
    }
    </>
  )
}

export default ProductItem
