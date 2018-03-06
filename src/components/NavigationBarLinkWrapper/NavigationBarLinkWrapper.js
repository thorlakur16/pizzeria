import React, {Component} from 'react';

const NavigationBarLinkWrapper = ({children}) => {

    return (
        <div className='nav-link-wrapper'>
            {children}
        </div>
    );
}

NavigationBarLinkWrapper.propTypes = {};

export default NavigationBarLinkWrapper;
