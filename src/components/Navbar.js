import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
       <nav class="navbar navbar-expand-sm navbar-dark px-sm-5">
      
   <Link to='/'>
<img src={logo} alt="store" className="navbar-brand"/>
   </Link>
  
   <Link to="/" className="nav-link">
   Products
   </Link>
   
   <Link to="/Cart" className="nav-link">
  <button>
      <i className="fas fa-cart-plus"/>
      my cart
      </button>
   </Link>
   
       </nav>
        
    )


    }
}