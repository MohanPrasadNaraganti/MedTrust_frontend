import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './CreateProduct.css'


const initialState = {

    title: '',
    price: 0,
    description: '',
    content: '',
    category: '',
    imageURL: '',

}

function CreateProduct() {

    const [productdata, setProductData] = useState(initialState)
    // const category = [
    //     { _id: 1, name: "medicine" },
    //     { _id: 2, name: "health" },
    //     { _id: 3, name: "drug" },
    //     { _id: 4, name: "wellness" },
    // ]

    const [categories , setCategories] = useState([])
    const handleChangeInput = e => {
        const { name, value } = e.target
        setProductData({ ...productdata, [name]: value })
    }

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const data = await axios.get('http://localhost:3001/api/category')
          setCategories(data.data)
  
        } catch (err) {
          alert(err.response.data.msg)
        }

      }

      fetchCategories();
      console.log(categories,"create")
  
    }, []);

    const handleSubmit = async e => {
        e.preventDefault()
        // console.log(productdata, "creaProd")
        try {
            // console.log("axios token---",token)
            await axios.post('http://localhost:3001/api/products', { ...productdata })
            alert("product created successfully!!")
            setProductData(initialState)
        } catch (error) {
            alert(error)
        }

    }
    return (
        <div className="create_product">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required value={productdata.title} onChange={handleChangeInput} />
          </div>
      
          <div className="row">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" required value={productdata.price} onChange={handleChangeInput} />
          </div>
      
          <div className="row">
            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" id="description" required value={productdata.description} rows="5" onChange={handleChangeInput} />
          </div>
      
          <div className="row">
            <label htmlFor="content">Content</label>
            <textarea type="text" name="content" id="content" required value={productdata.content} rows="7" onChange={handleChangeInput} />
          </div>
      
          <div className="row">
            <label htmlFor="imageURL">ImageURL</label>
            <textarea type="text" name="imageURL" id="imageURL" required value={productdata.imageURL} onChange={handleChangeInput} />
          </div>
      
          <div className="row">
            <label htmlFor="categories">Categories: </label>
            <select name="category" value={productdata.category} onChange={handleChangeInput}>
              <option value="">Please select a category</option>
               {categories?.map(category => (
                <option value={category.name} key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
      
          <button type="submit">Create</button>
        </form>
      </div>
      
    )
}

export default CreateProduct