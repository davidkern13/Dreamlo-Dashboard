import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import media from "../../style/MediaQuery";
import styled from 'styled-components';

export const TopNav = styled.div`
    width: 100%;
    height: 60px;
    flex: 1 100%;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.12);
`

function Navigation(){

    return (
        <TopNav>

        </TopNav>
    )
}

export default Navigation;