import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopHeader.css';

function TopHeader() {
    return (
        <div className="header">
            <nav className="headermenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/contact">Contuct us</NavLink>
            </nav>
            <div>
                Social Meadia LInk
            </div>
        </div>
    )
}

export default TopHeader;
