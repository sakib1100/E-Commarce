import React from 'react';
import './Header.css';
import image1 from './../image/shopping-cart.png';
const Header = () => {
    return (
       
       <nav className='header'>
      <div>
      <img src={image1} alt='' />
      </div>
       <div className='menuINon'>
        <a href='/home'>Home</a>
        <a href='/orders'>Orders</a>
        <a href='/inventory'>Inventory</a>
        <a href='/about'>About</a>
       </div>
       </nav>
    );
}

export default Header;
