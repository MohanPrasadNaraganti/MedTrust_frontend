import React, { useEffect, useState, useContext, useReducer } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'
import ProductItem from '../product/ProductItem'
import Search from '../search/Search'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddAction } from '../actions/cartAction'
import userReducer from '../reducers/userReducer'
import API_URL from '../Util'



	@@ -16,7 +15,7 @@ function Product() {
  let { id } = useParams()
  const userDetails = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);

  const [cartItems, setCartItems] = useState(cart);
  const [boolSearch, setBoolSearch] = useState(false)
  const [searchData, setSearchData] = useState({ name: '' })
	@@ -30,8 +29,7 @@ function Product() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const data = await axios.get('http://localhost:3001/api/products')
        const data = await axios.get(`${API_URL}/api/products`)
        setProductData(data.data.products)

      } catch (err) {
	@@ -88,7 +86,7 @@ function Product() {
        dispatch(cartAddAction(updatedCartItems));
      }
    }
    else {
      alert("Please Login")
    }

	@@ -110,15 +108,10 @@ function Product() {

  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignContent:"center",padding:"40px"}}>
        {  productdata ? productdata?.map((data, index) => <div key={index} style={{ display: 'inline-flex' }}> <ProductItem key={index} onAdd={onAdd} onRemove={onRemove} id={data.id} title={data.title} image={data.imageURL} content={data.content} product={data} price={data.price} /></div>) : <Spinner animation="grow" style={{backgroundColor:"purple"}} />  }
      </div>

    </>
  )
}
export default Product
	
