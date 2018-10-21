import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component{
    inputChangeHandler(event) {
        console.log(event.target.value);    
    }

    render() {
        return (
            <header>
                <div className='logo'>LOGO</div>
                <input type="text" onChange={(e) => this.inputChangeHandler(e)}/>
            </header>
        )
    }
}

export default Header;