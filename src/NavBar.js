import React from 'react';
import MenuComponent from './Components/MenuComponent';
import logo from './gifs/giphy.gif';

export const NavBar = () => {
    return (
        <div className="navBarContainer">
            <img src={logo} alt="Company Logo" height="80px" />
            <MenuComponent />
        </div>
    )
}
