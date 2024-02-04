import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
const Footer=()=>{
 return(
     <div className="main-footer">
         <div className="footer-container">
           <div className="row">
               <h5>Med Trust</h5>
               <p><Link to="/" style={{color:'white'}}>Home</Link> &nbsp;&nbsp;&nbsp; <Link to="/about" style={{color:'white'}}>About</Link> &nbsp;&nbsp;&nbsp; <Link to="/blog" style={{color:'white'}}>BLog</Link> &nbsp;&nbsp;&nbsp;<Link to="/contactUs" style={{color:'white'}}>Contact Us</Link>  &nbsp;&nbsp;&nbsp; <Link to="/services" style={{color:'white'}}>Services</Link></p>
               <p><a onClick={()=>{alert("Redirecting to Facebook")}}><FaFacebook size={40}/></a>&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={()=>{alert("Redirecting to Instagram")}}><FaInstagram size={40}/></a>&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={()=>{alert("Redirecting to Twitter")}}><FaTwitterSquare size={40}/></a></p>
               <hr/>
               <p>Copyright &copy;{new Date().getFullYear()} All rights reserved | This site is made by Med Trust team</p>
           </div>
         </div>
     </div>
 )
}
export default Footer;