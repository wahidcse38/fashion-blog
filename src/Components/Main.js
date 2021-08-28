import React from 'react';
import MainHeader from './Header/MainHeader/MainHeader';
import TopHeader from './Header/TopHeader';
import Home from './Body/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './Body/About/About';
import Contact from './Body/Contact/Contact';
import Post from './Body/Post/Post';

const Main = () => {
    return (
        <div>
            <TopHeader />
            <MainHeader />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/post" component={Post} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
export default Main;