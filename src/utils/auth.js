import React from 'react'
import { Redirect } from 'react-router-dom';

export const isUserAuthenticated = (auth) => {
    return (
        auth ? <></> : <Redirect to={{path: '/'}} />
    );
}
