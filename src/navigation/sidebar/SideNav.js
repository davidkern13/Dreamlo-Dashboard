import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import media from "../../style/MediaQuery";
import styled from 'styled-components';

export const SideNavigation = styled.div`
    max-width: 255px;
    height: 100vh;
    flex: 1;
    background-color:#16165D;
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.12);
`

function SideNav(){

    const nav_items = ['Dashboard', 'Users', 'Leadboard'];

    return (
        <SideNavigation>

        </SideNavigation>
    )
}

export default SideNav;