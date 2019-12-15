import React from 'react';

import {
    SideNavigation,
    InnerWrap
} from './style.js';

import SideLinks from '../links/SideLinks';

function SideNav(){

    const nav_items = ['home', 'dashboard', 'leadboard'];

    return (
        <SideNavigation>
            <InnerWrap>
                <SideLinks>{nav_items}</SideLinks>
            </InnerWrap>
        </SideNavigation>
    )
}

export default SideNav;