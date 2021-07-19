import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu=()=>{
    return(
        <>
        <diV className="container">
        <NavLink exact activeClassName="active" to="/" >Home</NavLink>
        <NavLink exact activeClassName="active" to="/about">About</NavLink>
        <NavLink exact activeClassNmae="active"to="/">Profile</NavLink>
        <NavLink exact activeClassName="active" to="/">Dashboard</NavLink>
        </diV>
        </>

    );
};
export default Menu;