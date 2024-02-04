import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../headers/Header'
import Home from '../components/Home'
// import { GlobalState } from '../GlobalState'
// import { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from '../reducers/userReducer';
import { cartAddAction } from '../actions/cartAction';
import { loginUser } from '../actions/loginAction';

/* In a CSS file or a style block in your component */





function Userpage() {
    const details = useSelector(state => state.user)
    // const userData = location.state;
    const dispatch = useDispatch()
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        const data = JSON.parse(storedData);
        // console.log("details", details)
        return (
            <>
                <div className='welcome-div'>
                    <h1 style={{ color: "#6610f2" , textTransform:"capitalize"}}> welcome {data.userDetails.name}</h1>
                </div>
                <Home data={data} />
            </>
        )
    }
}

export default Userpage
