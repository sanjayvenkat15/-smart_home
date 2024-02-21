import React, { useState } from 'react'
import mylogo from "../assets/mylogo.png"
import { NavLink } from 'react-router-dom'
function Header() {
    const[navShow,setNavShow]=useState(false)

    function changeUrl(path) {
        window.history.pushState({}, '', window.location.pathname + path);
      }
  return (
    <nav>
    <div className='container nav__container'>
    <a href='#' className='mylogo'>
    <img src={mylogo}/>
    </a>
    
    <ul className={navShow?'nav__items navshow':'nav__items'}>
    <li  onClick={()=>setNavShow(false)}>
        <a href='#'>Home</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#about'>About</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#testimonials'>Testimonials</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#faqs'>FAQs</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a >
        <li onClick={()=>setNavShow(false)}>
        <a href='#contact'>Contact</a>
    </li>
            </a>
    </li>
    
    
    </ul>
    
    
    
    <div className='nav__btns'>
    
        <a href='#'>LOG IN</a>
        <a href='#' className='btn'> SIGN IN</a>
    
    </div>
    {
        navShow?<div className='menu-btn ' >
        <i class="uil uil-multiply" onClick={()=>setNavShow(false)}></i>
        </div>:
        <div className='menu-btn' >
    
    <i class="fa-solid fa-bars" onClick={()=>setNavShow(true)}></i>
    </div>
    }
    
    
    
    
    </div>
    
    
    </nav>
  )
}

export default Header