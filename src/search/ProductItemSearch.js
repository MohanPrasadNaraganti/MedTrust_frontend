import React from 'react'
import {Link, useParams} from 'react-router-dom'
import '../product/ProductItem.css'
import Search from './Search'

function ProductItemSearch(Search) {
    let {id} = useParams()
    return (
        <div>
        <div className="card text-center">
         <div className="overflow"><img src={Search.image} className="card-img-top"/></div>
         <div className="card-body text-dark">
         <h6 className="card-title">{Search.title}</h6>
         <p className="card-text"><b>Content:</b> {Search.content}</p>
         {/* <button className="button" onClick={onAdd}>Add to Cart <i className="fas fa-shopping-cart"></i></button> */}
         </div>
         </div>
        </div>
    )
}

export default ProductItemSearch
