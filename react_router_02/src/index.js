import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user'

const App = () =>{
    return (<div>
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br />
                    <NavLink 
                        to='/posts'
                        activeStyle={{color:'red'}}
                        activeClassName="selected "
                    >Post</NavLink><br />
                    <NavLink to='/profile'>Profile</NavLink><br />
                    <NavLink to='/life'>Life</NavLink><br />
                    <NavLink to='/conditional'>Conditional</NavLink><br />
                    <NavLink to='/user'>User</NavLink><br />
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/life" component={Life} />
                    <Route path="/conditional" component={Conditional} />
                    <Route path="/user" component={User} />
                    <Route path="/" exact component={Home} />
                    <Route component={Posts}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));

