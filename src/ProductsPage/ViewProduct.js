import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './ViewProduct.css'
import Search from '../search/Search'
import { useDispatch, useSelector } from 'react-redux'
import cartReducer from '../reducers/cartReducer'
import { cartAddAction } from '../actions/cartAction'
import API_URL from '../Util'






function ViewProduct() {

  let { id } = useParams()
  const counter = true;
  const cartdata = useSelector(state => state.cart.cart);
  // console.log(cartdata,"cartdata")
  let [productsdata, setProductsData] = useState({})
  let [productsArray, setProductsArray] = useState([])
  const [productdetails, setProductDetails] = useState({})
  const [token, setToken] = useState(false)
  const [data, setData] = useState({})

  const firstLogin = localStorage.getItem('myData')
  const dispatch = useDispatch()

  
  const [cartItems, setCartItems] = useState(cartdata)
  // console.log(productdetails, "view")

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        // const data = await axios.get(`http://localhost:3001/api/products/${id}`)
        const data = await axios.get(`${API_URL}/api/products/${id}`)

        setProductDetails(data.data?.product)

      } catch (err) {
        alert(err.response.data.msg)
      }
    }
    fetchProduct();

  }, [cartdata])



  const onAdd = (product) => {
    if (firstLogin) {
      const exist = cartItems.find((x) => x._id === product._id);

      if (exist) {
        const updatedCartItems = cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        );
        setCartItems(updatedCartItems);
        dispatch(cartAddAction(updatedCartItems));
      } else {
        const updatedCartItems = [...cartItems, { ...product, qty: 1 }];
        setCartItems(updatedCartItems);
        dispatch(cartAddAction(updatedCartItems));
      }
    }
    else{
      alert("Please Login")
    }

  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="custom-product-card">
      <div className="custom-card text-center">
        <div className="custom-card-top">
          <img src={productdetails.imageURL} style={{ marginTop: "20px", width: "350px", height: "350px" }} alt="Product" />
        </div>
        <div className="custom-card-body text-dark">
          <div className="custom-product-details">
            <h6 className="custom-card-title">{productdetails.title}</h6>
            <p className="custom-card-text"><b>Content:</b> {productdetails.content}</p>
            <p className="custom-card-text"><b>Price:</b> ₹{productdetails.price}</p>
            <p className="custom-card-text"><b>Description:</b> {productdetails.description}</p>
          </div>
          <div className="custom-button-section">
            <button className="custom-button" onClick={() => onAdd(productdetails)}>
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            {/* <button style={{ marginLeft: "20px" }} className="custom-button">
            <Link to={`/viewproduct/${productdetails._id}`}>View</Link>
          </button> */}
          </div>
        </div>
      </div>
    </div>


  )
}

export default ViewProduct
