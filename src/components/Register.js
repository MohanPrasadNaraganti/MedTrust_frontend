import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        // console.log(user,"register")
        try {
            await axios.post('http://localhost:3001/user/register', {...user})

            //localStorage.setItem('firstLogin', true)

             alert("Registered successfully , please login to continue")
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    useEffect(()=>{
        localStorage.removeItem('myData')
    })
    return (
        <div className="login-page">
            <form className="login-form" onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <p>Already Registered , Please Login to Continue</p>
                    <Link to="/login" ><button type="submit" >Login</button> </Link>
                    
                </div>
            </form>
            
        </div>
    )
}

export default Register