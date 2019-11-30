import React from 'react'
import { Redirect } from 'react-router-dom'
 // import {isUserAuthenticated} from '../utils/auth';

function PrivateRoute (props) {
    return (
        <>
            { true ? props.children : <Redirect to={{path: '/'}} /> }
        </>
    )
}

export default PrivateRoute;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         true === true
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//     )} />
// )