import React from 'react'
import "./header.css";
import {Link} from 'react-router-dom'
 function Header() {
  return (
    <div>
        <header>
        <div className="nav container">
            <a href="#" className="logo">Blog </a>
            <Link to="/Login" className="login">Sign Up</Link>
            {/* <Link to="/" className="home">Home</Link> */}

        </div>
    </header>
    </div>
  )
}
export default Header;
