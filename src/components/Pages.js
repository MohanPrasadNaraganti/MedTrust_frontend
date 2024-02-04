import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Product from './Product'
import About from './About'
import Login from './Login'
import Register from './Register'
import NotFound from '../utils/not_found/NotFound'
import Home from './Home'
import Userpage from './Userpage'
import Blogs from './Blogs'
import ViewProduct from '../ProductsPage/ViewProduct'
import Search from '../search/Search'
import CreateProduct from '../CreateProducts/CreateProduct'
import CreateCategory from '../CreateCategory/CreateCategory'
import OrderHistoryTable from './OrderHistoryTable'
import Cart from './Cart'
import PaymentSuccessPage from './paymentSuccessPage'







function Pages() {
   
    return (
        <Routes >
            <Route path="/" exact element={ <Home />} />
            <Route path="/product" exact element={ <Product />} />
            <Route path="/about" exact element={ <About />} />
            <Route path="/login" exact element={ <Login />} />
            <Route path="/register" exact element={ <Register />} />
            <Route path="/userpage" exact element={ <Userpage />} />
            <Route path="/createproduct" exact element={ <CreateProduct />} />
            <Route path="/createCategory" exact element={ <CreateCategory />} />
            <Route path="/orderHistory" exact element={ <OrderHistoryTable />} />
            <Route path="/cart" exact element={ <Cart />} />
            <Route path="/blog" exact element={ <Blogs />} />
            <Route path="/search" exact element={ <Search />} />
            <Route path={`/viewProduct/:id`} exact element={ <ViewProduct />} />
            <Route path="/paymentSuccessPage" exact element={ <PaymentSuccessPage />} />
            <Route path="*" exact element={ <NotFound />} />
        </Routes>
    )
}

export default Pages
