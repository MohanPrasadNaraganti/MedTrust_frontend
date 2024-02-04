import React,{useState,useEffect,useContext}from 'react'
import axios from 'axios'

import ProductItem from '../product/ProductItem';
import ProductItemSearch from './ProductItemSearch';
import {FaLeaf, FaSearch} from 'react-icons/fa';
import ViewProduct from '../ProductsPage/ViewProduct';





function Search() {
    const [productsobj,setProductsObj] = useState({})
    const [productdata,setProductData] = useState([])
    const [boolSearch,setBoolSearch] = useState(false)
    const [searchData, setSearchData] = useState({name:''})
    let [searchpro,setSearchpro] = useState({})
    const [bool,setBool] = useState(true)
   
    const handleSearch = e =>{
        const {name, value} = e.target
        setSearchData({...searchData, [name]:value})
        //  console.log(searchData.name)
    }
   
    const handleSubmit = async e =>{
        e.preventDefault()
    console.log("search clicked",productdata)
    { productdata.filter((data)=>{
        if(data.title===searchData.name.toLowerCase().trim()){
            setBoolSearch(true)
            // console.log(searchData,data)
            return  window.location.href = `/viewproduct/${data.product_id}`;
        }
        else{
            setBool(false)
            // console.log("not found")
        }
              
        }
        )}
        
    }
    
    
   
    return (
        <div>
           
            <div className="container" >
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input  className="form-control me-2" type="search" name="name"  placeholder="search Products" required
                    value={searchData.name} onChange={handleSearch}  />
                    <button  className="btn btn-outline-success" >Search<i className="fas fa-search"></i></button>
                </form>
                {boolSearch || bool? '': <p style={{color:"red"}}>product not found , try with correct name</p>}
            </div>
               
            
        </div>
    )
}

export default Search
