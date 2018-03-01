import React from 'react';
import {Link} from "react-router-dom";

class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Offers</li>
                        <li>About us</li>
                        <li>Cart</li>
                        <li>Schedule</li>
                    </ul>
                </nav>
            </div>
        )
    };
}

export default NavBar;

