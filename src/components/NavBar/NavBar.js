import React from 'react';

import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
import {NavLink} from "react-router-dom";
//import {connect} from 'react-redux';

class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <NavigationBarLinkWrapper>

                    <NavLink
                        exact
                        to='/'
                        activeClassName='active'
                        className='nav-link' >Menu</NavLink>
                    <NavLink
                        to='/offers'
                        activeClassName='active'
                        className='nav-link'>Offers</NavLink>
                    <NavLink
                        to='/about'
                        activeClassName='active'
                        className='nav-link'>About us</NavLink>
                    <NavLink
                        to='/cart'
                        activeClassName='active'
                        className='nav-link'>Cart</NavLink>

                </NavigationBarLinkWrapper>

            </nav>
        )
    };
}

export default NavBar;

