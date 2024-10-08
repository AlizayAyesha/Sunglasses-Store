import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <input 
        type="text"
        className="search-input"
        placeholder="Enter your search sunglasses"
      />
      <div className="profile-container">
        <a href='#'>
          <FaHeart className='nav-icons'/>
        </a>
        <a href='#'>
          <MdShoppingCart className='nav-icons'/>
        </a>
        <Link to="/SignUp/SignUp" className="profile-link">
          <HiOutlineUserCircle className='nav-icons'/>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
