import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/">Home</Link>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <Link to ='/posts'>posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;