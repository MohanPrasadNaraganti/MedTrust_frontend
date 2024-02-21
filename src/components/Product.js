import React, { useEffect, useState, useContext, useReducer } from 'react'

import axios from 'axios'
import ProductItem from '../product/ProductItem'
import Search from '../search/Search'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddAction } from '../actions/cartAction'
import userReducer from '../reducers/userReducer'
import API_URL from '../Util'



function Product() {

  let { id } = useParams()
  const userDetails = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);
 
  const [cartItems, setCartItems] = useState(cart);
  const [boolSearch, setBoolSearch] = useState(false)
  const [searchData, setSearchData] = useState({ name: '' })
  const [productsobj, setProductsObj] = useState({})
  const [productdata, setProductData] = useState([])
  const [bool, setBool] = useState(true)
  const firstLogin = localStorage.getItem('myData')

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const data = await axios.get('http://localhost:3001/api/products')
        const data = await axios.get(`${API_URL}/api/products`)
        setProductData(data.data.products)

      } catch (err) {
        alert(err.response.data.msg)
      }
    }
    fetchProducts();

  }, []);



  const { products } = productdata;
  const handleSearch = e => {
    const { name, value } = e.target
    setSearchData({ ...searchData, [name]: value })
    //  console.log(searchData.name)
  }

  // const handleSubmit =async e=>{
  //     e.preventDefault()

  //     {productdata.map((data)=>{
  //         if(searchData.name.toLowerCase().trimEnd()===data.title){

  //             console.log(searchData,data)
  //             setBoolSearch(true)
  //             return  window.location.href = `/viewproduct/${data.product_id}`;
  //         }
  //         else{
  //             setBool(false)
  //             // console.log("not found")
  //         }
  //         })}
  // }





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
    <>
      <div>
        {productdata.map((data, index) => <div key={index} style={{ display: 'inline-flex' }}> <ProductItem key={index} onAdd={onAdd} onRemove={onRemove} id={data.id} title={data.title} image={data.imageURL} content={data.content} product={data} price={data.price} /></div>)}
      </div>

    </>
  )
}

export default Product

