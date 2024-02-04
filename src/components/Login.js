import React, { useEffect, useState } from 'react'
import './login.css'
import Register from './Register'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from '../headers/Header'
import Userpage from './Userpage'
import userReducer from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/loginAction'
import { cartAddAction } from '../actions/cartAction'

function Login() {
    const [loggedUser, setLoggedUser] = useState("")
    const dispatch = useDispatch();
    const location = useLocation()
    const [user, setUser] = useState({
        email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            const data = await axios.post('http://localhost:3001/user/login', { ...user })
            setLoggedUser(data.data.userDetails)
            // console.log(loggedUser, "login")
            dispatch(cartAddAction(data.data.userDetails.cart))
            dispatch(loginUser(data.data.userDetails));
            const dataToSend = { userDetails : data.data.userDetails};
            localStorage.setItem('myData', JSON.stringify(dataToSend));
            window.location.href = '/Userpage';
            // alert("logged in!!")

        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    // useEffect(() => {
    //     console.log(loggedUser, "effect")
    // }, [loggedUser])

    return (
        <div className="login-page">
            <form className="login-form " onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <p>Not a Active User , Register Now! </p>
                    <Link to={{ pathname: "/register", state: loggedUser }}><button type="submit" >Register</button></Link>

                </div>
            </form>
        </div>
    )
}

export default Login