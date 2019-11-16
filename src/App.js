import React from "react";

import "./App.css";
import styled from 'styled-components';

import {Login} from './Components/Login/Login';

export default function App() {

  return (
     <AppStyle>
        <Login />

     </AppStyle>
  );
}

const AppStyle = styled.div`
    width: 100%;
    height: 100vh;
    
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
`
