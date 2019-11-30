import React from "react";

import "./style/App.css";
import styled from 'styled-components';

import CustomRoute from './routes/CustomRoutes';

export default function App() {

  return (
     <AppStyle>
         <CustomRoute />
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
