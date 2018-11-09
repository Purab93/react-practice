import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';

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
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    <Route component={Posts}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));

