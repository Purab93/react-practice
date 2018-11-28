import React, {Component} from 'react';
import './layout.css';

import Header from '../../components/header/header';

class Layout extends Component{
    state={
        showNav: false
    }

    toggleSideNav(showNav){
        this.setState({
            showNav
        })
    }

    render(){
        return (
            <div>
                <Header 
                    showNav={this.state.showNav}
                    onHideNav = {() => this.toggleSideNav(false)}
                    onOpenNave = {() => this.toggleSideNav(true)}
                />
                {this.props.children}
                Footer
            </div>
        )
    }
}

export default Layout;