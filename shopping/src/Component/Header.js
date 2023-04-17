import React from 'react'
// import { Router } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Header() {
 let logout=()=>{
  localStorage.removeItem('email')
  window.location.href = 'login'
  }
  return (
    <>
       <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <Link class="navbar-brand logo_h" to="# "><img src="img/logo.png" alt=""/></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
              <li class="nav-item active"><Link class="nav-link" to="/home">Home</Link></li>
              <li class="nav-item submenu dropdown">
                <Link to='#' class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Shop</Link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><Link class="nav-link" to="/category">Shop Category</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/single-product">Product Details</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/checkout">Product Checkout</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/confirmation">Confirmation</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/cart">Shopping Cart</Link></li>
                </ul>
							</li>
              <li class="nav-item submenu dropdown">
                <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Blog</Link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><Link class="nav-link" to="/blog">Blog</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/single-blog">Blog Details</Link></li>
                </ul>
							</li>
							<li class="nav-item submenu dropdown">
                <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Pages</Link>
                <ul class="dropdown-menu">
                  <li class="nav-item"><Link class="nav-link" to="/login">Login</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/register">Register</Link></li>
                  {/* <li class="nav-item"><Link class="nav-link" to="tracking-order">Tracking</Link></li> */}
                </ul>
              </li>
              <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
            </ul>

            <ul class="nav-shop">
              <li class="nav-item"><button><i class="ti-search"></i></button></li>
              <li class="nav-item"><button><i class="ti-shopping-cart"></i><span class="nav-shop__circle">3</span></button> </li>
              <li class="nav-item"><Link class="button button-header" to="#">Buy Now</Link></li>
              <li class="nav-item"><Link onClick={logout} class="button button-header" to="#">Log Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    </>
  )
}
