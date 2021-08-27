import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Card.css';

function Card() {
    return (
        <div className="card">
            <div className="logo">
                <a href="#">Fashion Blog</a>
            </div>
            <Navbar />
        </div>

    )
}

export default Card;
