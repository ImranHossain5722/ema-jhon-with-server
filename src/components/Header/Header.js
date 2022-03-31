import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="" />
                <div> 
                    <Link to="/">Home</Link>
                    <Link to="/shop" >Shop</Link>
                    <Link to ="/Orders">Orders</Link>
                    <Link to ="/inventory">Inventory</Link>
                    <Link to ="/about">About us</Link>  


                </div>
            </nav>
        </div>
    );
};

export default Header;