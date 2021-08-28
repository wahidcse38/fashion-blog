import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {

    state = {
        isOpenSearch: false,
    }

    isOpenHandler = () => {
        this.setState({
            isOpenSearch: !this.state.isOpenSearch
        })
    }

    searchPost = (event) => {
        event.preventDefault();
        alert("Search Post !")
    }

    render() {
        let searchClass = this.state.isOpenSearch ? "searchInputOpen" : "searchInput";
        return (
            <div className="navbar">
                <nav className="navbarMenu">
                    <a href="#">Category</a>
                    <a href="#">Features</a>
                    <NavLink to="/post">Post</NavLink>
                    <a href="#">Learn Blogging</a>
                    <a href="#">Popular Post</a>
                </nav>
                <div className="search">
                    <form onSubmit={this.searchPost}>
                        <input className={searchClass} type="text" placeholder="Search" />
                        <img onClick={this.isOpenHandler} src="assets/search_icon/search.png" alt="Search" />
                    </form>
                </div>
            </div>
        )
    }

}

export default Navbar
