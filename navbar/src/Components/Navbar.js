import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import '@fortawesome/fontawesome-free/css/all.css';



const Navbar = () => {

  const [isMobile,setisMobile] = useState(false);

  return (
    <>
       <nav className='navbar'>
       <h3 className='logo'>Logo</h3>
       <ul className={isMobile? 'nav-link-mobile': 'nav-link'} onClick={()=> setisMobile(false)}>
       
       <Link to="/" className='home'>
       <li>Home</li>
       </Link>
       <Link to="/about" className='about'>
       <li>About</li>
       </Link>
       <Link to="/skills" className='skills'>
       <li>Skills</li>
       </Link>
       <Link to="/contact" className='contact'>
       <li>Contact</li>
       </Link>
       <Link to="/signup" className='signup'>
       <li>Signup</li>
       </Link>

       </ul>

       <button className='mobile-menu-icon' onClick={()=>setisMobile(!isMobile)}>
       {isMobile? (
        <i className='fas fa-times'></i>
       ):(
        <i className='fas fa-bars'></i>
       )}
       </button>


       </nav>
    </>
  )
}

export default Navbar

