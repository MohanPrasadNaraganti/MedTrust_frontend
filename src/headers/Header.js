import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import LogoImg from '../images/medtrust.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import userReducer from '../reducers/userReducer';
import { loginUser } from '../actions/loginAction';
import cartReducer from '../reducers/cartReducer';
import axios from 'axios';
import API_URL from '../Util';
import './Hamburger.css'; // Import your CSS file for styling

const Header = () => {

    const [islogin, setIsLogin] = useState(false)
    const userDetails = useSelector(state => state.user)
    const cart = useSelector(state => state.cart.cart)
    const [role, setRole] = useState(0)
    const [cartItems, setCartItems] = useState(cart)
    const [click, setClick] = useState(false);
    const [len, setLen] = useState(cart.length)
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleClick = () => setClick(!click);
    useEffect(() => {
        setLen(cart.length)
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            const data = JSON.parse(storedData);
            if (data) {
                setIsLogin(true)
            }
            dispatch(loginUser(data.userDetails))
            setRole(userDetails?.user?.role)
        }
        const firstLogin = localStorage.getItem('myData')
        if (firstLogin) {
            setIsLogin(true)

        }

    }, [role, len, cart])


    const Logout = () => {
        // console.log(userDetails?.user?._id,cartItems,"logoff")
        const updateUserCart = async () => {
            try {
                const response = await axios.patch(`${API_URL}/user/updatecart`, {
                    userId: userDetails?.user?._id,
                    cart: cartItems,
                });
            } catch (err) {
                alert(err.response.data.msg);
            }
        };
        updateUserCart();
        localStorage.removeItem('myData')
        setIsLogin(false)
        window.location.href = "/";
    }
    return (
        <>
            <nav className="navbar sticky-top ">
                <div className="nav-container">

                    <h2><Link to="/"><img src={LogoImg} width="80px" height="80px" alt="companyLogo" /> Med Trust || Online Pharmacy </Link></h2>
                    {/* <h2>  <NavLink exact to="/" className="nav-logo">
                        Med Trust <i style={{ color: "lightgreen" }} className="fa fa-check" aria-hidden="true"></i></NavLink> </h2> */}

                    <div className="headerbody">
                        <div style={{display:"flex",justifyContent:"flex-end"}}> 
                        <div className="hamburger-menu">
                            <div className={`hamburger ${!isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            {
                                !isOpen && 
                                (<>
                                    {role === 1 ?
                                        (<ul className={click ? "nav-menu active" : "nav-menu"}>
                                            <li className="nav-item"><NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick} > Home </NavLink></li>
                                            <li className="nav-item"><NavLink exact to="/product" activeClassName="active" className="nav-links" onClick={handleClick} > Products </NavLink></li>
                                            <li className="nav-item"><NavLink exact to="/createproduct" activeClassName="active" className="nav-links" onClick={handleClick} > CreateProduct </NavLink></li>
                                            <li className="nav-item"><NavLink exact to="/createcategory" activeClassName="active" className="nav-links" onClick={handleClick} > CreateCategory </NavLink></li>
                                            <li className="nav-item"><NavLink exact to="/orderhistory" activeClassName="active" className="nav-links" onClick={handleClick} > OrdersHistory </NavLink></li>
                                            <li className="nav-item"> {islogin ? <a style={{ cursor: "pointer", color: "#0d6efd" }} onClick={Logout}>Logout </a> : <NavLink exact to="/Login" activeClassName="active" className="nav-links" onClick={handleClick} > Login </NavLink>}</li>

                                        </ul>) :
                                    ( 
                                    <><ul className={click ? "nav-menu active" : "nav-menu"}>
                                        <li className="nav-item"> {islogin ? <Link to="/userpage">Home </Link> : <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick} > Home </NavLink>}</li>
                                        <li className="nav-item"> <NavLink exact to="/product" activeClassName="active" className="nav-links" onClick={handleClick} > Product </NavLink></li>
                                        <li className="nav-item"> <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick} > About </NavLink></li>
                                        <li className="nav-item"> {islogin ? <Link to="/Cart"><i className="fas fa-cart-plus"></i> Cart ({len})</Link> : <NavLink exact to="/register" activeClassName="active" className="nav-links" onClick={handleClick} > Register </NavLink>}</li>
                                        <li className="nav-item"> {islogin ? <a style={{ cursor: "pointer", color: "#0d6efd" }} onClick={Logout}>Logout </a> : <NavLink exact to="/Login" activeClassName="active" className="nav-links" onClick={handleClick} > Login </NavLink>}</li>

                                    </ul>
                                    <div className="nav-icon" onClick={handleClick}>
                                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                                    </div>
                                    </>)
                                    


                                     } </>)
                            }


                        </div>
                        </div>
                      
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Header
