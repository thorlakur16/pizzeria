import React from 'react';

import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
//import {NavLink} from "react-router-dom";
//import {connect} from 'react-redux';

class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (

            <nav className='nav-bar'>

                <NavigationBarLinkWrapper>
                </NavigationBarLinkWrapper>

                <ul>
                    <li>Menu</li>
                    <li>Offers</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <li>Schedule</li>
                </ul>
            </nav>
        )
    };
}

export default NavBar;

