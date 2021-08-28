import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Post.css';

function Post() {
    return (
        <section className="container">
            <div className="blogPost">
                <div style={{ textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "#565673" }}>
                    <p>Featured</p>
                    <h3 >Beautiful is always beautiful </h3>
                    <p style={{ fontSize: "12px", fontStyle: "italic", textTransform: "lowercase" }}>posted on july 21 2021</p>
                </div>
                <img src="assets/images/img1.jpg" alt="Image1" />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </section >
    )
}

export default Post
